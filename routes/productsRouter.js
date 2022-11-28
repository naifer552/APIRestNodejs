const express=require('express');
const ProductsService =  require('./../services/productsService');
const validatorHandler =  require('./../middlewares/validatorHandler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/productSchema');
const router=express.Router();

const service = new ProductsService();

// get especifico
router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req,res, next) => {
  try {
    const{ id }=req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});


// get general
router.get('/', async (req,res, next)=>{
  try {
    const products = await service.find();
    res.json(products);

  } catch (error) {
    next(error);
  }
});

// post
router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) =>{
  try {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);

  } catch (error) {
    next(error);
  }
});

// patch
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) =>{
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);

  } catch (error) {
    next(error);
  }
});

// delete
router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
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
