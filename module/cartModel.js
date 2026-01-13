// const getdb = require('../util/dbConnection').getdb;
// const mongodb = require('mongodb');

// class Cart {
//   static addToCart(userId, productId) {
//     const db = getdb();

//     return db.collection('carts').findOne({ userId })
//       .then(cart => {
//         if (!cart) {
//           // create new cart
//           return db.collection('carts').insertOne({
//             userId,
//             items: [{ productId, quantity: 1 }]
//           });
//         }

//         const existingItemIndex = cart.items.findIndex(
//           item => item.productId === productId
//         );

//         if (existingItemIndex >= 0) {
//           cart.items[existingItemIndex].quantity += 1;
//         } else {
//           cart.items.push({ productId, quantity: 1 });
//         }

//         return db.collection('carts').updateOne(
//           { userId: uId },
//           { $set: { items: cart.items } }
//         );
//       });
//   }

//   static getCart(userId) {
//     const db = getdb();
//     return db.collection('carts').findOne({ userId });
//   }

//   static removeFromCart(userId, productId) {
//     const db = getdb();
//     return db.collection('carts').updateOne(
//       { userId },
//       { $pull: { items: { productId } } }
//     );
//   }
// }

// module.exports = Cart;

const getdb = require('../util/dbConnection').getdb;
const mongodb = require('mongodb');

class Cart {
  static addToCart(userId, productId) {
    const db = getdb();

    const uId = new mongodb.ObjectId(userId);
    const pId = new mongodb.ObjectId(productId);

    // ✅ FIXED
    return db.collection('carts').findOne({ userId: uId })
      .then(cart => {
        if (!cart) {
          return db.collection('carts').insertOne({
            userId: uId,
            items: [{ productId: pId, quantity: 1 }]
          });
        }

        const existingItemIndex = cart.items.findIndex(
          item => item.productId.toString() === pId.toString()
        );

        if (existingItemIndex >= 0) {
          cart.items[existingItemIndex].quantity += 1;
        } else {
          cart.items.push({ productId: pId, quantity: 1 });
        }

        // ✅ FIXED
        return db.collection('carts').updateOne(
          { userId: uId },
          { $set: { items: cart.items } }
        );
      });
  }

  // ✅ FIXED
  static getCart(userId) {
    const db = getdb();
    return db.collection('carts').findOne({
      userId: new mongodb.ObjectId(userId)
    });
  }

  static removeFromCart(userId, productId) {
    const db = getdb();
    return db.collection('carts').updateOne(
      { userId: new mongodb.ObjectId(userId) },
      { $pull: { items: { productId: new mongodb.ObjectId(productId) } } }
    );
  }
}

module.exports = Cart;
