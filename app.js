const express = require('express');
const mongoConnect = require('./util/dbConnection').mongoConnect;
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');
const cartRoutes = require('./routes/cartRoute');
require('dotenv').config();


const app = express();

app.use(express.json());


app.use('/api',productRoute);
app.use('/api',userRoute)
app.use('/api', cartRoutes);



mongoConnect(() => {
  app.listen(3000)
});