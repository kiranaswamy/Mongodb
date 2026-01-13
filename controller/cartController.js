const Cart = require('../module/cartModel');

exports.addToCart = (req, res) => {
  const { userId, productId } = req.body;

  Cart.addToCart(userId, productId)
    .then(() => res.send('Product added to cart'))
    .catch(err => res.status(500).send(err));
};

exports.getCart = (req, res) => {
  const userId = req.params.userId;

  Cart.getCart(userId)
    .then(cart => res.json(cart || { items: [] }))
    .catch(err => res.status(500).send(err));
};

exports.removeFromCart = (req, res) => {
  const { userId, productId } = req.body;

  Cart.removeFromCart(userId, productId)
    .then(() => res.send('Product removed from cart'))
    .catch(err => res.status(500).send(err));
};
