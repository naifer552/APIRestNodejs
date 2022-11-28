const boom = require('@hapi/boom');

class RentalService {

  constructor(){
    this.rental = [];
    this.generate();
  }

  generate(){
    this.rental = [{
      id: 1,
      idUserRental: '111111',
      idProductRental: '121212',
      initialDate: '4/3/4',
      update: '3/4/3'
    },
    {
      id: 2,
      idUserRental: '133123',
      idProductRental: '121212',
      initialDate: '4/3/4',
      update: '3/4/3'
    },
    {
      id: 3,
      idUserRental: '122122',
      idProductRental: '121212',
      initialDate: '4/3/4',
      update: '3/4/3'
    }
  ]

  }

  async create(data){
    const newRental = {
      ...data
    }
    if (!newRental) {
      throw boom.notFound('Product not found');
    }
    this.rental.push(newRental);
    return newRental;
    }

  async find(){
    const rental =  this.rental;
    if (!rental) {
      throw boom.notFound('Product not found');
    }
    return rental;
  }

  async findOne(id){
    const rental = this.rental.find(item => item.id == id);
    if (!rental) {
      throw boom.notFound('Product not found');
    }
    // Ejemplo de como bloquear un producto a un clienete
    // else if (product.isBlock) {
        //throw boom.conflict('product is block');
    // }
    return rental;
  }

  async update(id, changes){
    const index = this.rental.findIndex(item => item.id == id);
    if (index  === -1) {
      throw boom.notFound('Product not found');
    }
    const rental = this.rental[index];
    this.rental[index] = {
      ...rental,
      ...changes
    }
    return this.rental[index];
  }

  async delete(id){
    const index = this.rental.findIndex(item => item.id == id);
    if (index  === -1) {
      throw boom.notFound('Product not found');
    }
    this.rental.splice(index, 1);
    return { id };
  }

}

module.exports = RentalService;
