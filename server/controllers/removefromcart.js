const User = require("../model/user");

const removefromcart = async (req, res) => {
  try {
    const userId = req.user.id;
    const itemId = req.body.itemId;

    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }
    if (user.cartData[req.body.itemId] > 0) {
      user.cartData[req.body.itemId] -= 1;
    }
    user.markModified("cartData");
    await user.save();

    console.log("Data saved to database successfully");
    res.status(200).json({ message: "Item removed from  cart" });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ error: "Server Error" });
  }
};
module.exports = removefromcart;
