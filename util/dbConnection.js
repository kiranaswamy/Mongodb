// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('app', 'root', 'Kiran@123', {
//   host: 'localhost',
//   dialect:'mysql' 
// });

// (async()=>{
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }}
// )();
//  module.exports = sequelize



const mongoose = require('mongoose');

const mongoConnect = async () => {
  try{
    await mongoose.connect(process.env.URL)
      console.log('Connected');
  }catch(err){
      console.log(err);
    }
};

module.exports = mongoConnect;
