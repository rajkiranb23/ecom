const User = require("../model/user.js");
const getCartData = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.json(user.cartData);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = getCartData;
