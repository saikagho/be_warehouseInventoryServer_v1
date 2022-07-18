/* eslint-disable prettier/prettier */
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');
const { ERROR_TEXT_MESSAGES } = require('../utils/constant');

const getProducts = catchAsync(async (req, res) => {
    const productsList = await productService.getProductsFileContent();
    if (!productsList) {
      throw new ApiError(httpStatus.NOT_FOUND, ERROR_TEXT_MESSAGES.PRODUCTS_NOT_FOUND);
    }
    res.send(productsList);
});

const addProducts = catchAsync(async (req, res) => {
  const productsAddResp = await productService.addProduct(req.body);
  if (productsAddResp?.length === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, ERROR_TEXT_MESSAGES.INSUFFICIENT_INVENTORY);
  }
  res.status(httpStatus.CREATED).send(productsAddResp);
});

const removeProducts = catchAsync(async (req, res) => {
    const productsDelResp = await productService.deleteProduct(req.body.productName);
    if (productsDelResp?.length === 0) {
      throw new ApiError(httpStatus.NOT_FOUND, ERROR_TEXT_MESSAGES.UNABLE_TO_DELETE);
    }
    res.status(httpStatus.CREATED).send();
});

module.exports = {
    getProducts,
    removeProducts,
    addProducts,
}