const Product = require("../model/product.js"); // Assuming this is your model
const mongoose = require("mongoose");

const validateProductData = (data) => {
  if (
    !data.name ||
    !data.image ||
    !data.category ||
    !data.new_price ||
    !data.old_price ||
    !data.gender
  ) {
    return false;
  }
  return true;
};

const addProduct = async (req, res) => {
  try {
    if (!validateProductData(req.body)) {
      return res.status(400).json({ msg: "Invalid product data" });
    }

    let maxProduct = await Product.findOne().sort({ id: -1 });
    let newId = maxProduct ? maxProduct.id + 1 : 1;

    const product = new Product({
      id: newId,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
      gender: req.body.gender,
    });

    await product.save();
    res.json({ success: true });
  } catch (error) {
    console.error("Error while adding product:", error);
    res.status(500).json({ msg: "Error while adding product" });
  }
};

module.exports = addProduct;
