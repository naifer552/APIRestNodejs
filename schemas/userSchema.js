const Joi = require('joi');

// const id = Joi.string().uuid();
const id = Joi.number().integer().min(1);
const name = Joi.string().min(3).max(15);
const DNI = Joi.string().min(3).max(15);
const age = Joi.number().integer().min(1);
const gender = Joi.string().min(1).max(3);

const createUserSchema = Joi.object({
  id: id,
  name: name.required(),
  DNI: DNI.required(),
  age: age,
  gender: gender,
});

const updateUserSchema = Joi.object({
  id: id,
  name: name,
  DNI: DNI,
  age: age,
  gender: gender,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
