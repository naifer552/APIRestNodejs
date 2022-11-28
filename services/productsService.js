const boom = require('@hapi/boom');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    this.products = [{
      id: 1,
      name: 'product 1',
      idPriceProducts: '123123'
    },
    {
      id: 2,
      name: 'prodcut 2',
      idPriceProducts: '1212'
    },
    {
      id: 3,
      name: 'product 3',
      idPriceProducts: '121121'
    }
  ]

  }

  async create(data){
    const newProduct = {
      ...data
    }
    if (!newProduct) {
      throw boom.notFound('Product not found');
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find(){
    const products =  this.products;
    if (!products) {
      throw boom.notFound('Product not found');
    }
    return products;
  }

  async findOne(id){
    const product = this.products.find(item => item.id == id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    // Ejemplo de como bloquear un producto a un clienete
    // else if (product.isBlock) {
        //throw boom.conflict('product is block');
    // }
    return product;
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id == id);
    if (index  === -1) {
      throw boom.notFound('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id == id);
    if (index  === -1) {
      throw boom.notFound('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
