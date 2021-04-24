const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Database setup
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => { console.log("Base de datos conectada")});

// Routes Setup
app.use('/api/category', require('./routes/category'));
app.use('/api/productos', require('./routes/productos'));

// Listen to Port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor the videojuegos MERN esta ejecutando en el puerto ${port}`);
})