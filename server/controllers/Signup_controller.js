const userSchema = require("../model/user");

let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const signupUser = async (req, res) => {
  try {
    //taking the info from the request
    let { name, email, password } = req.body;
    //creating a cart array to accomodate 40 products for now
    let cart = {};
    for (let i = 0; i < 40; i++) {
      cart[i] = 0;
    }
    //2.email cannot be empty
    if (!email.length) {
      return res.status(403).json({ error: "Enter e-mail please" });
    }
    //3.if email is given it needs to be in the email format
    if (!emailregex.test(email)) {
      return res.status(403).json({ error: "enter valid email" });
    }
    //validate the given password

    if (!passwordRegex.test(password)) {
      return res.status(403).json({
        error:
          "password should have minimum 8 characters including numbers alphabets of lower and capital case  and special characters",
      });
    }

    //if all the coditions are met we can create the user

    let user = new userSchema({
      name: name,
      email: email,
      password: password,
      cartData: cart,
    });

    //saving the user to DB and sending a success response

    await user.save();
    res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ msg: "Error while signing up user" });
  }
};

module.exports = signupUser;
