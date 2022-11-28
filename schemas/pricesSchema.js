const Joi = require('joi');

// const id = Joi.string().uuid();
const id = Joi.number().integer().min(1);
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);

const createPriceSchema = Joi.object({
  id: id,
  name: name.required(),
  price: price.required(),
});

const updatePriceSchema = Joi.object({
  id: id,
  name: name,
  price: price,
});

const getPriceSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPriceSchema, updatePriceSchema, getPriceSchema }
