// const express = require('express');
// const route = express.Router();
// let User = [];

// route.get('/user',(req,res)=>{
//     res.send(User)
// })

// route.get('/user/:id',(req,res)=>{
//     const id = Number(req.params.id);
//     let user = User.find(e=>e.id === id)
//     if(!user)[
//         res.status(404).send('user not found')
//     ]
//     res.send(user)

// })
// route.post('/user',(req,res)=>{
//     const {name} = req.body;
//     const newUser= {id:User.length+1,name};
//     User.push(newUser);
//     User.name = name
//     res.send(newUser)
// })

// route.put('/user/:id',(req,res)=>{
//     const id = Number(req.params.id);
//     const {name} = req.body;
//     const update = User.find(e => e.id === id);
//     update.name = name
//     res.send('user updated')

// })
// route.delete('/user/:id',(req,res)=>{
//     let id = Number(req.params.id);
//     let intialLength = User.length;
//     User = User.filter(s=>s.id !== id);

//     if(User.length === intialLength){
//         res.status(404).send('user not found')
//     }
//     res.send(`${id} deleted`)
// })

// module.exports = route

const express = require('express');
const route = express.Router();
const userController = require('../controller/userController');

route.post('/user',userController.createUser);
route.get('/user',userController.getUsers);
route.put('/user/:id',userController.updateUser);
route.delete('/user/:id',userController.deleteUser);

module.exports = route