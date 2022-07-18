/* eslint-disable prettier/prettier */
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { inventoryService } = require('../services');
const { ERROR_TEXT_MESSAGES } = require('../utils/constant');

const getInventories = catchAsync(async (req, res) => {
  const inventoryList = await inventoryService.getInventoryFileContent();
  if (!inventoryList) {
    throw new ApiError(httpStatus.NOT_FOUND, ERROR_TEXT_MESSAGES.INVENTORY_NOT_FOUND);
  }
  res.send(inventoryList);
});

module.exports = {
    getInventories,
}