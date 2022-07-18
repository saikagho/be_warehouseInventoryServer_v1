/* eslint-disable import/newline-after-import */
/* eslint-disable prettier/prettier */

const fs = require('fs');
const path = require('path');    

function fileReaderFunction (relPath) {
    return fs.readFileSync(path.join(__dirname, relPath)).toString(); 
}

function fileUpdateFunction (relPath, content) {
    return fs.writeFileSync((path.join(__dirname, relPath)), content); 
}

module.exports = {
    fileReaderFunction,
    fileUpdateFunction,
}