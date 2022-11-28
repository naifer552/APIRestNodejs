const boom = require('@hapi/boom');

class PricesService {

  constructor(){
    this.prices = [];
    this.generate();
  }

  generate(){
    this.prices = [{
      id: 1,
      name: 'estrato 1',
      price: '133456'
    },
    {
      id: 2,
      name: 'estrato 2',
      price: '143456'
    },
    {
      id: 3,
      name: 'estrato 3',
      price: '153456'
    }
  ]

  }

  async create(data){
    const newPrices = {
      ...data
    }
    if (!newPrices) {
      throw boom.notFound('Product not found');
    }
    this.prices.push(newPrices);
    return newPrices;
  }


  async find(){
    const prices =  this.prices;
    if (!prices) {
      throw boom.notFound('Product not found');
    }
    return prices;
  }

  async findOne(id){
    const prices = this.prices.find(item => item.id == id);
    if (!prices) {
      throw boom.notFound('Product not found');
    }
    // Ejemplo de como bloquear un producto a un clienete
    // else if (product.isBlock) {
        //throw boom.conflict('product is block');
    // }
    return prices;
  }

  async update(id, changes){
    const index = this.prices.findIndex(item => item.id == id);
    if (index  === -1) {
      throw boom.notFound('Product not found');
    }
    const price = this.prices[index];
    this.prices[index] = {
      ...price,
      ...changes
    }
    return this.prices[index];
  }

  async delete(id){
    const index = this.prices.findIndex(item => item.id == id);
    if (index  === -1) {
      throw boom.notFound('Product not found');
    }
    this.prices.splice(index, 1);
    return { id };
  }

}

module.exports = PricesService;
