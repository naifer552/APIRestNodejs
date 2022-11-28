const express=require('express');
const UsersService = require('../services/usersService');
const validatorHandler =  require('./../middlewares/validatorHandler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('./../schemas/userSchema');

const router=express.Router();

const service = new UsersService();

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.json(user);

  } catch (error) {
    next(error);
  }
});

router.get('/',async (req,res, next)=>{
    try {
      const users = await service.find();
      res.json(users);

  } catch (error) {
    next(error);
  }
});

// post
router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) =>{
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);

  } catch (error) {
    next(error);
  }
});

// patch
router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.json(user);

  } catch (error) {
    next(error);
  }
});

// delete
router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
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
