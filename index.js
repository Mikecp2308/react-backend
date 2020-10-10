//importamos librerias

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');


//usar metodos de las librerias
const app = express();
require('dotenv').config();

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());


//Databases setup 
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(() => {console.log('Database Connect successfully')})

//routes setup

app.use('/api/category', require('./routes/category'));
app.use('/api/product', require('./routes/products'));

//Listen to Port
const port = process.env.PORT;

app.listen(port, () =>{
    console.log(`connect to the server of port ${port}`);
})