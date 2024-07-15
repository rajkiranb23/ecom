const Product = require("../model/product.js");

const listProduct = async (req, res) => {
  let products = await Product.find({});
  console.log("all products fetched");
  res.send(products);
};

module.exports = listProduct;
