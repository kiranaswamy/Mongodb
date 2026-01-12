// const express = require('express');
// const app = express();
// // const userRoute = require('./routes/userRoute');
// // const productRoute = require('./routes/productRoute')
// // const userModel = require('./module/userModule')

// let mongoConnect  = require('./util/dbConnection');


// app.use(express.json());
// app.use('/api',userRoute);
// app.use('/api',productRoute)

// const userSchema = new mongoConnect.Schema({
//   name: String,
//   age: Number
// });

// const Employee = mongoConnect.model('Employess',userSchema);

// async function addUsers(){
//     await Employee.create({name:"Naman",age:30});
//     console.log('User inserted')
// }
// addUsers();

// app.js


const express = require('express');
const mongoConnect = require('./util/dbConnection');
const userRoute = require('./routes/userRoute');
require('dotenv').config();


const app = express();

app.use(express.json());


app.use('/api',userRoute);


mongoConnect().then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});