const express = require('express');
const cartController = require('../controller/cartController');

const router = express.Router();

router.post('/cart', cartController.addToCart);
router.get('/cart/:userId', cartController.getCart);
router.delete('/cart', cartController.removeFromCart);

module.exports = router;
