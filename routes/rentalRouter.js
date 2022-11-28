const express=require('express');
const RentalService = require('../services/rentalService');
const validatorHandler =  require('./../middlewares/validatorHandler');
const { createRentalSchema, updateRentalSchema, getRentalSchema } = require('./../schemas/rentalSchema');
const router=express.Router();

const service = new RentalService();

router.get('/:id',
  validatorHandler(getRentalSchema, 'params'),
  async (req,res, next)=>{
  try {
    const{id}=req.params;
    const rental = await service.findOne(id);
    res.json(rental);

  } catch (error) {
    next(error);
  }
});

router.get('/',async (req,res, next)=>{
    try {
      const rentals = await service.find();
      res.json(rentals);

  } catch (error) {
    next(error);
  }
});

// post
router.post('/',
  validatorHandler(createRentalSchema, 'body'),
  async (req, res, next) =>{
    try {
      const body = req.body;
      const newRental = await service.create(body);
      res.status(201).json(newRental);

  } catch (error) {
    next(error);
  }
});

// patch
router.patch('/:id',
  validatorHandler(getRentalSchema, 'params'),
  validatorHandler(updateRentalSchema, 'body'),
  async (req, res, next) =>{
    try {
      const { id } = req.params;
      const body = req.body;
      const rental = await service.update(id, body);
      res.json(rental);

  } catch (error) {
    next(error);
  }
});

// delete
router.delete('/:id',
  validatorHandler(getRentalSchema, 'params'),
  async (req, res, next) =>{
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.json(rta);

  } catch (error) {
    next(error);
  }
});

module.exports=router;
