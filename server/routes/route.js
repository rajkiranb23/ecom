const express = require("express");
const signUpUser = require("../controllers/Signup_controller.js");
const loginUser = require("../controllers/loginController.js");

const removeProduct = require("../controllers/removeProductController.js");
const addProduct = require("../controllers/addProductController.js");
const listProduct = require("../controllers/listProducts.js");
const addToCart = require("../controllers/addtocart.js");
const auth = require("../controllers/authentication.js");
const getCartdata = require("../controllers/getcartdata.js");
const removefromcart = require("../controllers/removefromcart.js");
const getProductData = require("../controllers/getproductdata.js");
const router = express.Router();

//user login and signup
router.post("/signup", signUpUser);
router.post("/login", loginUser);

//routes for admin panel
router.post("/addproduct", addProduct);
router.post("/removeproduct", removeProduct);

router.post("/addToCart", auth, addToCart);
router.post("/removefromcart", auth, removefromcart);
router.get("/getCartData", auth, getCartdata);

//routes for product data lists

router.get("/allproducts", listProduct);
router.get("/productdata/:id", getProductData);

module.exports = router;
