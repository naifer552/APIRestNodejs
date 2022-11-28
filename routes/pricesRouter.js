const express=require('express');
const PricesService =  require('./../services/pricesService');
const validatorHandler =  require('./../middlewares/validatorHandler');
const { createPriceSchema, updatePriceSchema, getPriceSchema } = require('./../schemas/pricesSchema');
const router=express.Router();

const service = new PricesService();

router.get('/:id',
  validatorHandler(getPriceSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const price = await service.findOne(id);
    res.json(price);

  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const prices = await service.find();
    res.json(prices);

  } catch (error) {
    next(error);
  }
});

// post
router.post('/',
  validatorHandler(createPriceSchema, 'body'),
  async (req, res, next) =>{
  try {
    const body = req.body;
    const newPrices = await service.create(body);
    res.status(201).json(newPrices);

  } catch (error) {
    next(error);
  }
});

// patch
router.patch('/:id',
  validatorHandler(getPriceSchema, 'params'),
  validatorHandler(updatePriceSchema, 'body'),
  async (req, res, next) =>{
  try {
    const { id } = req.params;
    const body = req.body;
    const price = await service.update(id, body);
    res.json(price);

  } catch (error) {
    next(error);
  }
});

// delete
router.delete('/:id',
  validatorHandler(getPriceSchema, 'params'),
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
