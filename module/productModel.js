const getdb = require('../util/dbConnection').getdb;
const mongodb = require('mongodb');  

class Product {
  constructor(title, price, description, imageUrl,userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.userId = userId
  }

  save() {
    const db = getdb();
    return db.collection('products').insertOne(this);
  }

  static fetchAll() {
    const db = getdb();
    return db.collection('products').find().toArray();
  }

    static fetchByUserId(userId) {
    const db = getdb();
    return db.collection('products').find({ userId }).toArray();
  }

static updateById(id, updatedData) {
  const db = getdb();
  let filter;
  try {
    // Try to treat as ObjectId (for normal MongoDB _id)
    filter = { _id: new mongodb.ObjectId(id) };
  } catch (err) {
    // If conversion fails, fallback to string match
    filter = { _id: id };
  }
  return db.collection('products').updateOne(
    filter,
    { $set: updatedData }
  );
}

static deleteById(id){
  const db = getdb();
  let filter;
  try {
    // Try to treat as ObjectId (for normal MongoDB _id)
    filter = { _id: new mongodb.ObjectId(id) };
  } catch (err) {
    // If conversion fails, fallback to string match
    filter = { _id: id };
  }
  return db.collection('products').deleteOne(filter);
}

}

module.exports = Product;
