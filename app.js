const ghRelease = require('gh-release');
var username = process.argv[2];
var password = process.argv[3];
var name = process.argv[4];
var filelocation = process.argv.length;
var file ="";
if (filelocation>4){
for(var i=5;i<filelocation;i++){
  file = process.argv[i]; 
  const pathToThisFolder = require('path').resolve(require('path').resolve());
  const relativePath = [require('path').relative(pathToThisFolder, file)];
  const options = {
    tag_name: name,
    target_commitish: 'master',
    name: name,
    body: file.replace(/^.*[\\\/]/, ''),
    assets: relativePath,
    draft: true,
    prerelease: false,
    repo: 'test-katalon',
    owner: 'hiepdang1908',
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
  
}
}
else{
  file = process.argv[5];
  const pathToThisFolder = require('path').resolve(require('path').resolve());
const relativePath = require('path').relative(pathToThisFolder, file);
const options = {
  tag_name: name,
  target_commitish: 'master',
  name: name,
  body: file.replace(/^.*[\\\/]/, ''),
  assets: [relativePath],
  draft: true,
  prerelease: false,
  repo: 'test-katalon',
  owner: 'hiepdang1908',
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
}
