const decompress = require('decompress');
const decompressUnzip = require('decompress-unzip');
const decompressTargz = require('decompress-targz');
const archiver = require('archiver');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

const filePath = process.argv[2];
const version = process.argv[3];

const fileFullName = filePath.replace(/^.*[\\\/]/, '');
const fileName = fileFullName.replace(/[\\\/\\.].*/, '');
const fileExtension = fileFullName.replace(/^.*[\\\/\\\.]/, '');

const parentDirPath = path.dirname(filePath);
const outputDirPath = path.join(parentDirPath, 'output');
mkdirp.sync(outputDirPath);

const containingDirName = `${fileName}-${version}`;
const containingDirPath = path.join(outputDirPath, containingDirName);

function repackage(decompressPlugin, archive, extension) {
    console.log(`Decompressing ${filePath} into ${containingDirPath}.`)
    decompress(filePath, containingDirPath, {
        plugins: [
            decompressPlugin
        ]
    }).then(() => {
        const outputFilePath = path.join(outputDirPath, `${containingDirName}.${extension}`);
        const outputFile = fs.createWriteStream(outputFilePath);
        console.log(`Compressing ${containingDirPath} into ${outputFilePath}.`);
        archive.pipe(outputFile);
        archive.directory(containingDirPath, containingDirName);
        return archive.finalize();
    });
}

if (fileExtension == 'zip'){
    const archiveZip = archiver('zip');
    repackage(decompressUnzip(), archiveZip, 'zip');
} else {
    const archiveTar = archiver('tar');
    repackage(decompressTargz(), archiveTar, 'tar.gz');
}
