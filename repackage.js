const decompress = require('decompress');
const decompressUnzip = require('decompress-unzip');
const decompressTargz = require('decompress-targz');
const args = process.argv;
var path =process.argv[2];
var version = process.argv[3];
var fullname= path.replace(/^.*[\\\/]/, '');
var filename = fullname.replace(/[\\\/\\.].*/, '');
var filenamezip = path.replace(/^.*[\\\/\\\.]/, '');
var pathsave = path.replace(fullname, '');

if(filenamezip=='zip'){
    decompress(path,`${filename}-${version}`, {
        plugins: [
            decompressUnzip()
        ]
    }).then(() => {
        var archiver = require('archiver'),
            archive = archiver('zip'),
            fs = require('fs');
            var mkdirp = require('mkdirp');
            var outputfolder = mkdirp(pathsave+'/outputzip', function(err) { 
            });
            var outputpath= `${pathsave}outputzip/${filename}-${version}.zip`
            var output = fs.createWriteStream(outputpath);
            archive.pipe(output).on('finish', function () {
    
        });
            archive.directory(`${filename}-${version}`,{ name:filename+'-'+version});
            archive.finalize(function (err, bytes) {
            if (err) {
                throw err;
            }
        });
    });
}
else{
    
    decompress(path,filename+'-'+version , {
        plugins: [
            decompressTargz()
        ]
    }).then(() => {
        var archiver = require('archiver'),
        archive = archiver('tar'),
        fs = require('fs');
        var mkdirp = require('mkdirp');
        var outputfolder = mkdirp(pathsave+'/outputzip', function(err) { 
            });
        var outputpath= `${pathsave}outputzip/${filename}-${version}.tar.gz`
        var output = fs.createWriteStream(outputpath);
        archive.pipe(output).on('finish', function () {
    });
        archive.directory(`${filename}-${version}`,{ name:filename+'-'+version});
        archive.finalize(function (err, bytes) {
        if (err) {
            throw err;
        }
     });
    });
}
