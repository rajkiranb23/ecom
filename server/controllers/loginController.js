const userSchema = require("../model/user");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    email = email.trim();
    console.log(req.body);

    let userlogin = await userSchema.findOne({ email });
    if (!userlogin) {
      console.log("not able to find the user");
      return res.status(401).json({ error: "Authentication failed" });
    }

    const passCompare = password === userlogin.password;

    if (!passCompare) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    console.log("name and password are correct");
    const token = jwt.sign(
      { userId: userlogin._id },
      "rkb2345fgvvwlopandkdrtrtrffdssdfsfwdvbg"
    );

    res.json({
      success: true,
      token,
      userName: userlogin.name,
      message: "logged in successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error while login the user" });
  }
};

module.exports = userLogin;
