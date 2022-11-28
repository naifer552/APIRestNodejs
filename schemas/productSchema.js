const Joi = require('joi');

// const id = Joi.string().uuid();
const id = Joi.number().integer().min(1);
const name = Joi.string().alphanum().min(3).max(15);
const idPriceProducts = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
  id: id,
  name: name.required(),
  idPriceProducts: idPriceProducts.required(),
});

const updateProductSchema = Joi.object({
  id: id,
  name: name,
  idPriceProducts: idPriceProducts,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
