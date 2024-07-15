const User = require("../model/user.js");
const getCartData = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    console.log("User cart data:", user.cartData); // Log the cart data
    res.json(user.cartData);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = getCartData;
