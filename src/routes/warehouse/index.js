const express = require('express');
const productRoute = require('./product.route');
const inventoryRoute = require('./inventory.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/product',
    route: productRoute,
  },
  {
    path: '/inventory',
    route: inventoryRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
