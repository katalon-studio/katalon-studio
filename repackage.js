const decompress = require('decompress');
const decompressUnzip = require('decompress-unzip');
const decompressTargz = require('decompress-targz');
const archiver = require('archiver');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const tar = require('tar');

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

function repackage(decompressPlugin, compress, extension) {
    console.log(`Decompressing ${filePath} into ${containingDirPath}.`)
    decompress(filePath, containingDirPath, {
        plugins: [
            decompressPlugin
        ]
    }).then(() => {
        const outputFilePath = path.join(outputDirPath, `${containingDirName}.${extension}`);
        console.log(`Compressing ${containingDirPath} into ${outputFilePath}.`);
        return compress(outputFilePath);
    });
}

function zip(outputFilePath) {
    const outputFile = fs.createWriteStream(outputFilePath);
    const archive = archiver('zip');
    archive.pipe(outputFile);
    archive.directory(containingDirPath, containingDirName);
    return archive.finalize();
}

function targz(outputFilePath) {
    return tar.c(
        {
            gzip: true,
            file: outputFilePath
        },
        [containingDirPath]
    );
}

if (fileExtension == 'zip') {
    repackage(decompressUnzip(), zip, 'zip');
} else {
    repackage(decompressTargz(), targz, 'tar.gz');
}