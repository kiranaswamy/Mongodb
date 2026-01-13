const Product = require('../module/productModel');

exports.createProduct = (req, res, next) => {
  const { title, price, description, imageUrl, userId} = req.body;

  const product = new Product(
    title,
    price,
    description,
    imageUrl,
    userId
  );

  product.save()
    .then(() => {
      res.status(201).json({ message: 'Product created' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error creating product' });
    });
};

exports.getProductsByUser = (req, res) => {
  const userId = req.params.userId;

  Product.fetchByUserId(userId)
    .then(products => res.status(200).json(products))
    .catch(err => res.status(500).json({ message: 'Error fetching products' }));
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error fetching products' });
    });
};

exports.updateProduct = (req,res)=>{
  const id = req.params.id;
  const { title, price, description, imageUrl } = req.body;

  Product.updateById(id, { title, price, description, imageUrl })
    .then(result => {
      if(result.matchedCount === 0){
        return res.status(404).send('Product not found');
      }
      res.send('Product updated');
    })
    .catch(err => res.status(500).send(err));
};

exports.deleteProduct = (req,res)=>{
  const id = req.params.id;

  Product.deleteById(id)
    .then(result => {
      if(result.deletedCount === 0){
        return res.status(404).send('Product not found');
      }
      res.send('Product deleted');
    })
    .catch(err => res.status(500).send(err));
};


