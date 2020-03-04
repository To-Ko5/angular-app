const Product = require('./model/products')

class FakeDb {
  constructor(){
    this.products = [
      {
        name: 'a',
        coverImg: './assets/img/original.jpg',
        price: 100,
        description: 'aaaaaaaaa',
        heading1: 'heading1',
        heading1Content: '1111111111',
        heading2: 'heading2',
        heading2Content: '22222222',
        heading3: 'heading3',
        heading3Content: '33333333',
      },
      {
        name: 'b',
        coverImg: './assets/img/original.jpg',
        price: 100,
        description: 'bbbbbbb',
        heading1: 'heading1',
        heading1Content: '1111111111',
        heading2: 'heading2',
        heading2Content: '22222222',
        heading3: 'heading3',
        heading3Content: '33333333',
      },  {
        name: 'c',
        coverImg: './assets/img/original.jpg',
        price: 100,
        description: 'cccccccc',
        heading1: 'heading1',
        heading1Content: '1111111111',
        heading2: 'heading2',
        heading2Content: '22222222',
        heading3: 'heading3',
        heading3Content: '33333333',
      },
    ]
  }

  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product)
      newProduct.save()
    })
  }

  async initDb(){
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb(){
    await Product.deleteMany({})
  }
  seeDb() {
    this.pushProductsToDb()
  }
}

module.exports = FakeDb
