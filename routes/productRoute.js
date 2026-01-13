// let express = require('express');
// let route = express.Router();

// let Product = [];

// route.get('/product',(req,res)=>{
//     res.send(Product)
// })
// route.get('/product/:id',(req,res)=>{
//     let id = Number(req.params.id);
//     let product = Product.find(s=>s.id === id)
//     res.send(product)
// })
// route.post('/product',(req,res)=>{
//     let {name} = req.body;
//     let newProduct = {id:Product.length+1,name};
//     Product.push(newProduct)
//     res.send(newProduct)
// })
// route.put('/product/:id',(req,res)=>{
//     let id = Number(req.params.id);
//     let {name} = req.body;
//     let product = Product.find(s=>s.id === id);
//     product.name = name;
//     res.send('name updated')
// })
// route.delete('/product/:id',(req,res)=>{
//     let id = Number(req.params.id);
//     let initialLength = Product.length;
//     Product = Product.filter(s=>s.id !== id);
//    if(Product.length === initialLength){
//     res.status(404).send('Product not Found')
//    }
//    res.send(`${id} deleted`)
// })
// module.exports = route


const express = require('express');
const productController = require('../controller/productController');

const router = express.Router();

router.post('/products', productController.createProduct);
router.get('/products', productController.getProducts);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.get('/users/:userId/products', productController.getProductsByUser);

module.exports = router;

