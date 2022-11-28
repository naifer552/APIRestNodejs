const boom = require('@hapi/boom');

class UsersService {

  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
    this.users = [{
      id: 1,
      name: 'naifer',
      DNI: '123456',
      age: 24,
      gender: 'M'
    },
    {
      id: 2,
      name: 'david',
      DNI: '124456',
      age: 34,
      gender: 'M'
    },
    {
      id: 3,
      name: 'Silvia',
      DNI: '123466',
      age: 24,
      gender: 'F'
    }
  ]

  }

  async create(data){
    const newUser = {
      ...data
    }
    if (!newUser) {
      throw boom.notFound('Product not found');
    }
    this.users.push(newUser);
    return newUser;
  }

  async find(){
    const users =  this.users;
    if (!users) {
      throw boom.notFound('Product not found');
    }
    return users;
  }

  async findOne(id){
    const users = this.users.find(item => item.id == id);
    if (!users) {
      throw boom.notFound('Product not found');
    }
    // Ejemplo de como bloquear un producto a un clienete
    // else if (product.isBlock) {
        //throw boom.conflict('product is block');
    // }
    return users;
  }

  async update(id, changes){
    const index = this.users.findIndex(item => item.id == id);
    if (index  === -1) {
      throw boom.notFound('Product not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    }
    return this.users[index];
  }

  async delete(id){
    const index = this.users.findIndex(item => item.id == id);
    if (index  === -1) {
      throw boom.notFound('Product not found');
    }
    this.users.splice(index, 1);
    return { id };
  }

}

module.exports = UsersService;
