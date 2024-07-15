// Server-side controller: addToCart
const User = require("../model/user");

const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const itemId = req.body.itemId;

    // Retrieve user data
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Update cart data
    if (!user.cartData) {
      user.cartData = {};
    }
    if (!user.cartData[itemId]) {
      user.cartData[itemId] = 0;
    }
    user.cartData[itemId] += 1;
    // Mark cartData as modified
    user.markModified("cartData");

    // Save user data
    await user.save();

    console.log("Data saved to database successfully");

    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = addToCart;
