var  username = process.argv[2];
var password = process.argv[3];
var filelocation = process.argv[4];
const pathToThisFolder = require('path').resolve(require('path').resolve());
const relativePath = require('path').relative(pathToThisFolder, filelocation);
const ghRelease = require('gh-release');
const options = {
     tag_name: 'v1.0.0',
     target_commitish: 'master',
     name: 'v1.0.0',
     body: filelocation.replace(/^.*[\\\/]/, '') ,
     assets: [relativePath],
     draft: true,
     prerelease: false,
     repo: 'katalon-studio',
     owner: 'katalon-studio',
     endpoint: 'https://api.github.com'
   }
   options.auth = {
     username: username,
     password: password,
     filelocation: filelocation
   }
    
   ghRelease(options, function (err, result) {
     if (err) throw err
     console.log(result);
   })
