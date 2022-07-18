/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const { INVENTORY_FILE_PATH } = require('../utils/constant');
const { fileReaderFunction } = require('../utils/fileAccess');

const getInventoryFileContent = async() => {
    let data = fileReaderFunction(INVENTORY_FILE_PATH);
    data = JSON.parse(data);
    return data;
}

module.exports = {
  getInventoryFileContent,
};
  