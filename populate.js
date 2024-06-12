require('dotenv').config();

const Product = require('./models/products');
const connectDB = require('./db/connection');

const ProductsData = require('./product.json');


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(ProductsData);
    console.log('SUCCESS!!!');

    process.exit(0);
  } catch (error) {
    console.log(error);
  }

}

start();