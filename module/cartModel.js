const getdb = require('../util/dbConnection').getdb;
const mongodb = require('mongodb');

class Cart {
  static addToCart(userId, productId) {
    const db = getdb();

    return db.collection('carts').findOne({ userId })
      .then(cart => {
        if (!cart) {
          // create new cart
          return db.collection('carts').insertOne({
            userId,
            items: [{ productId, quantity: 1 }]
          });
        }

        const existingItemIndex = cart.items.findIndex(
          item => item.productId === productId
        );

        if (existingItemIndex >= 0) {
          cart.items[existingItemIndex].quantity += 1;
        } else {
          cart.items.push({ productId, quantity: 1 });
        }

        return db.collection('carts').updateOne(
          { userId },
          { $set: { items: cart.items } }
        );
      });
  }

  static getCart(userId) {
    const db = getdb();
    return db.collection('carts').findOne({ userId });
  }

  static removeFromCart(userId, productId) {
    const db = getdb();
    return db.collection('carts').updateOne(
      { userId },
      { $pull: { items: { productId } } }
    );
  }
}

module.exports = Cart;
