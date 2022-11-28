const express = require('express');
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const pricesRouter = require('./pricesRouter');
const rentalRouter = require('./rentalRouter');

function routerApi(app)
{
  const router = express.Router();
  app.use('/api/v1',router); // se genera una ruta padre
  router.use('/products',productsRouter);
  router.use('/users',usersRouter);
  router.use('/prices',pricesRouter);
  router.use('/rental',rentalRouter);
}

module.exports=routerApi;
