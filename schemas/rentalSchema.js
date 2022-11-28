const Joi = require('joi');

// const id = Joi.string().uuid();
const id = Joi.number().integer().min(1);
const idUserRental = Joi.number().integer().min(1);
const idProductRental = Joi.number().integer().min(1);
const initialDate = Joi.string().min(3).max(15);
const update = Joi.string().min(3).max(15);

const createRentalSchema = Joi.object({
  id: id,
  idUserRental: idUserRental.required(),
  idProductRental: idProductRental.required(),
  initialDate: initialDate.required(),
  update: initialDate
});

const updateRentalSchema = Joi.object({
  id: id,
  idUserRental: idUserRental,
  idProductRental: idProductRental,
  update: update
});

const getRentalSchema = Joi.object({
  id: id.required(),
});

module.exports = { createRentalSchema, updateRentalSchema, getRentalSchema }
