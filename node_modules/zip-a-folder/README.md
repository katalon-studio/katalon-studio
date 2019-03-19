[![NPM](https://nodei.co/npm/zip-a-folder.png)](https://nodei.co/npm/zip-a-folder/)

[![Build](https://travis-ci.org/maugenst/zip-a-folder.svg?branch=master)](https://travis-ci.org/maugenst/zip-a-folder.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/maugenst/zip-a-folder/badge.svg?branch=master)](https://coveralls.io/github/maugenst/zip-a-folder?branch=master)
[![Dependencies](https://david-dm.org/maugenst/zip-a-folder.svg)](https://david-dm.org/maugenst/zip-a-folder)
[![Known Vulnerabilities](https://snyk.io/test/github/maugenst/zip-a-folder/badge.svg?targetFile=package.json)](https://snyk.io/test/github/maugenst/zip-a-folder?targetFile=package.json)


# zip-a-folder
Inspired by ``zip-folder`` to just zip a complete folder plain into a zip file I
recreated this project since zip-folder was very outdated and seemed not 
to be maintained anymore. Also I added support for modern ES6 language 
features like promises/async/await.

## Basic Usage

Install via npm

```
npm install zip-a-folder
```

### Promised Usage

```
const zip-a-folder = require('zip-a-folder');

class ZipAFolder {

    static async main() {
        await zip-a-folder.zip('/path/to/the/folder', '/path/to/archive.zip');
    }
}

ZipAFolder.main();

```

### Callback Usage

```
const zipFolder = require('zip-a-folder');

class ZipAFolder {

    static main() {
        zipFolder.zipFolder('/path/to/the/folder', '/path/to/archive.zip', function(err) {
            if(err) {
                console.log('Something went wrong!', err);
            }
        });
    }
}

ZipAFolder.main();

```

### Tests

Tests are written under ``test`` and run by jest. To run the tests call ``npm test``.

## Thanks

* Special thanks to @sole for her initial work.
* Thanks to YOONBYEONGIN
