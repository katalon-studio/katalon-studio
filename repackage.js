var GitHub = require('github-api');
const jsonfile = require('jsonfile');

var gh = new GitHub({
    username: process.argv[2],
    password: process.argv[3],
    fileKatalon: process.argv[4]
});

gh.getRepo("faceapi", "faceapi").listReleases(function (error, result, request) {

    console.log(result);
    var versions = [];
    for (var i = 0; i < result.length; i++) {
        var versionNumber = result[i].tag_name.replace("v", "");
        for (var j = 0; j < result[i].assets.length; j++) {
            var name = result[i].assets[j].name;
            var url = result[i].assets[j].browser_download_url;
            var os = "";
            if (name.search("dmg") >= 0) {
                os = "macOS (dmg)";
            } else if (name.search(".app.zip") >= 0) {
                os = "macOS (app)";
            } else if (name.search("tar.gz") >= 0 && name.search("GUI") === -1) {
                os = "Linux";
            } else if (name.search("Windows_64") >= 0) {
                os = "Windows 64";
            } else if (name.search("Windows_32") >= 0) {
                os = "Windows 32";
            } else {
                continue;
            }
            var type = {
                os: os,
                version: versionNumber,
                filename: name,
                url: url
            };
            versions.push(type);
        }
    }
    const file = 'releases.json';

    jsonfile.writeFile(file, versions, { spaces: 4 }, function (err) {
        if (err) console.error(err);
    });
    function readFile(file) {
        return new Promise(function (resolve, reject) {
           var fileReader = new FileReader();
      
           fileReader.addEventListener('load', function (event) {
              var content = event.target.result;
              content = atob(content.replace(/^(.+,)/, ''));
      
              resolve({
                 filename: file.name,
                 content: content
              });
           });
      
           fileReader.addEventListener('error', function (error) {
              reject(error);
           });
      
           fileReader.readAsDataURL(file);
        });
     }
     function saveFile(data) {
        return new Promise(function(resolve, reject) {
           data.repository.write(
              data.branchName,
              data.filename,
              data.content,
              data.commitTitle,
              function(err) {
                 if (err) {
                    reject(err);
                 } else {
                    resolve(data.repository);
                 }
              }
           );
        });
     }
     function uploadFiles(files, commitTitle) {
        var filesPromises = [].map.call(files, readFile);
      
        return Promise
           .all(filesPromises)
           .then(function(files) {
              return files.reduce(
                 function(promise, file) {
                    return promise.then(function() {
                       // Upload the file on GitHub
                       return gitHub.saveFile({
                          repository: gitHub.repository,
                          branchName: config.branchName,
                          filename: file.filename,
                          content: file.content,
                          commitTitle: commitTitle
                       });
                    });
                 },
                 Promise.resolve()
              );
           });
     }
var files = fileKatalon.replace(/[\\\/\\.].*/, '');;
var commitTitle = 'Files uploaded';
 
uploadFiles(files, commitTitle)
   .then(function() {
      alert('Your file has been saved correctly.');
   })
   .catch(function(err) {
      console.error(err);
      alert('Something went wrong. Please, try again.');
   });
});
