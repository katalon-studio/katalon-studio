"use strict";

const fs = require("fs");
const path = require("path");
const zipafolder = require("../lib/zip-a-folder");

describe("Zip-A-Folder Test", function() {
  let testasync = path.resolve(__dirname, "testasync.zip");
  let testcallback = path.resolve(__dirname, "testcallback.zip");
  let testnotexisting = path.resolve(__dirname, "/notexisting/testcallback.zip");

  beforeAll(() => {
    if (fs.existsSync(testasync)) {
      fs.unlinkSync(testasync);
    }
    if (fs.existsSync(testcallback)) {
      fs.unlinkSync(testcallback);
    }
  });

  it("ASYNC: Zip test folder", async function() {
    expect.assertions(1);
    await zipafolder.zip(path.resolve(__dirname, "data/"), testasync);

    expect(fs.existsSync(testasync)).toBe(true);
  });

  it("ASYNC: Zip test folder failing", async function() {
    expect.assertions(1);
    try {
      await zipafolder.zip(path.resolve(__dirname, "notexisting/"), testasync);
    } catch (e) {
      expect(e.message).toMatch(/no such file or directory/);
    }
  });

  it("ASYNC: Zip test folder into a zipfile in a notexisting folder", async function() {
    expect.assertions(1);

    try {
      await zipafolder.zip(path.resolve(__dirname, "data/"), testnotexisting);
    } catch (e) {
      expect(e.message).toMatch(/no such file or directory/);
    }
  });

  it("CALLBACK: Zip test folder", function() {
    zipafolder.zipFolder(
      path.resolve(__dirname, "data/"),
      testcallback,
      () => {
        expect(fs.existsSync(testcallback)).toBe(true);
      }
    );
  });
});
