"use strict";
var fs = require("fs");
var unzip = require("unzip-stream");

module.exports = (zipFile, outputFolder) =>
  new Promise((resolve, reject) => {
    var unzipExtractor = unzip.Extract({
      path: outputFolder
    });

    unzipExtractor.on("error", reject).on("close", resolve);

    fs.createReadStream(zipFile).pipe(unzipExtractor);
  });

// todo: compare this to child_process.execSync(`unzip ${zipfile}`, { cwd: tmpdir }); sometime
