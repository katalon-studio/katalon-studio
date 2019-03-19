"use strict";
const child_process = require("child_process");
const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
const klaw = require("klaw-sync");

var unzip = require("./unzip");

const bestzip = require("../lib/bestzip");

const cli = path.join(__dirname, "../bin/cli.js");

const tmpdir = path.join(__dirname, "tmp");
const destination = path.join(tmpdir, "test.zip");

const testCases = [
  { cwd: "test/fixtures/", source: "*" }, // no .dotfiles
  { cwd: "test/fixtures/", source: "./" }, // include .dotfiles
  { cwd: "test/", source: "fixtures/*" },
  { cwd: "test/", source: "fixtures/" },
  { cwd: "test/fixtures", source: "file.txt" },
  { cwd: "test/fixtures", source: "obama.jpg" },
  { cwd: "test/fixtures", source: ["file.txt", "obama.jpg"] },
  { cwd: "test/fixtures", source: ["file.txt", ".dotfile"] },
  { cwd: "test/fixtures", source: ["file.txt", "subdir"] },
  { cwd: "test/fixtures", source: "subdir/subfile.txt" },
  { cwd: "test/", source: "fixtures/subdir/subfile.txt" },
  { cwd: "test/", source: "fixtures/*/*.txt" },
  { cwd: "test/fixtures/subdir", source: "../file.txt" }
];

const cleanup = () =>
  new Promise((resolve, reject) => {
    rimraf(tmpdir, err => {
      if (err) {
        return reject(err);
      }
      fs.mkdir(tmpdir, err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });

const getStructure = tmpdir => {
  // strip the tmp dir and convert to unix-style file paths on windows
  return klaw(tmpdir).map(({ path }) =>
    path.replace(tmpdir, "").replace(/\\/g, "/")
  );
};

describe("file structure", () => {
  const hasNativeZip = bestzip.hasNativeZip();
  const testIfHasNativeZip = hasNativeZip ? test : test.skip;

  beforeEach(cleanup);

  // these tests have known good snapshots
  // so, it's run once for bestzip against the snapshot
  // and, if bestzip used
  test.each(testCases)("cli: %j", async testCase => {
    const sourceArgs =
      typeof testCase.source === "string"
        ? testCase.source
        : testCase.source.join(" ");

    child_process.execSync(`node ${cli} ${destination} ${sourceArgs}`, {
      cwd: path.join(__dirname, "../", testCase.cwd)
    });

    await unzip(destination, tmpdir);
    const structure = getStructure(tmpdir);

    expect(structure).toMatchSnapshot();

    // because multiple tests aren't allowed to match the same snapshot,
    // but we do want to ensure that they all create the same output
    testCase.structure = structure;
  });

  testIfHasNativeZip.each(testCases)(
    "cli with --force=node: %j",
    async testCase => {
      const sourceArgs =
        typeof testCase.source === "string"
          ? testCase.source
          : testCase.source.join(" ");

      child_process.execSync(
        `node ${cli} --force=node ${destination} ${sourceArgs}`,
        { cwd: path.join(__dirname, "../", testCase.cwd) }
      );

      await unzip(destination, tmpdir);
      const structure = getStructure(tmpdir);

      expect(structure).toMatchSnapshot();

      // on systems *with* a native zip, this validates that both methods output the same thing (mac, linux)
      if (testCase.structure) {
        expect(structure).toEqual(testCase.structure);
      } else {
        // the structure is defined in the first test run, so it may not be defined when running subsets of tests
        console.log("skipping structure match");
      }
    }
  );

  test.each(testCases)("programmatic: %j", async testCase => {
    await bestzip(
      Object.assign(
        { destination, cwd: path.join(__dirname, "../", testCase.cwd) },
        testCase
      )
    );
    await unzip(destination, tmpdir);
    const structure = getStructure(tmpdir);

    expect(structure).toMatchSnapshot();

    if (testCase.structure) {
      expect(structure).toEqual(testCase.structure);
    } else {
      // the structure is defined in the first test run, so it may not be defined when running subsets of tests
      console.log("skipping structure match");
    }
  });

  testIfHasNativeZip.each(testCases)(
    "programmatic with nodeZip: %j",
    async testCase => {
      await bestzip.nodeZip(
        Object.assign(
          { destination, cwd: path.join(__dirname, "../", testCase.cwd) },
          testCase
        )
      );
      await unzip(destination, tmpdir);
      const structure = getStructure(tmpdir);

      expect(structure).toMatchSnapshot();

      // on systems *with* a native zip, this validates that both methods output the same thing (mac, linux)
      if (testCase.structure) {
        expect(structure).toEqual(testCase.structure);
      } else {
        // the structure is defined in the first test run, so it may not be defined when running subsets of tests
        console.log("skipping structure match");
      }
    }
  );

  // we can't use snapshots here, because the absolute paths will change from one system to another
  // but, when native zip is available, we want to compare it to node zip to ensure that the outputs match
  const absolutePathTestCases = testCases.map(testCase =>
    (Array.isArray(testCase.source) ? testCase.source : [testCase.source])
      .map(arg => path.join(testCase.cwd, arg))
      .join(" ")
  );

  testIfHasNativeZip.each(absolutePathTestCases)(
    "same output between native and node zip with absolute file paths: %s",
    async args => {
      child_process.execSync(`node ${cli} --force=node ${destination} ${args}`);

      await unzip(destination, tmpdir);
      const nodeStructure = getStructure(tmpdir);

      await cleanup();

      child_process.execSync(
        `node ${cli} --force=native ${destination} ${args}`
      );

      await unzip(destination, tmpdir);
      const nativeStructure = getStructure(tmpdir);

      expect(nodeStructure).toEqual(nativeStructure);
    }
  );
});
