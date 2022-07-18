/* eslint-disable prettier/prettier */
const express = require('express');
const { URL } = require('../../utils/constant');
const inventoryController = require('../../controllers/inventory.controller');

const router = express.Router();

router.get(URL.GET_INVENTORY_URI, inventoryController.getInventories);

module.exports = router;
