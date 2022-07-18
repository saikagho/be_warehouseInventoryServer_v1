/* eslint-disable prettier/prettier */
const express = require('express');
const { URL } = require('../../utils/constant');
const validate = require('../../middlewares/validate');
const productsValidation = require('../../validations/product.validation');
const productsController = require('../../controllers/product.controller');

const router = express.Router();

router.put(URL.REMOVE_PRODUCT_URI, validate(productsValidation.removeProducts), productsController.removeProducts);
router.put(URL.ADD_PRODUCT_URI, validate(productsValidation.addProducts), productsController.addProducts);
router.get(URL.GET_PRODUCT_URI, productsController.getProducts);

module.exports = router;
