import React, { useState } from "react";
import "./loginsignup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginSignup = () => {
  const [loginState, setloginState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const changeHandeler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const signup = async () => {
    let responseData;
    axios
      .post("https://rajkiranb23.onrender.com/signup", formData)
      .then(({ data }) => {
        if (data.success) {
          window.alert("signed up success");
        }
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };
  const login = async () => {
    try {
      const response = await axios.post(
        "https://rajkiranb23.onrender.com/login",
        formData
      );
      const { success, token, userName, message } = response.data;
      if (success) {
        console.log("Login successful!");
        localStorage.setItem("auth-token", token);
        window.location.replace("/");
      } else {
        console.log("Login failed.");
        console.log("Message:", message);
      }
    } catch (error) {
      if (error.response) {
        console.log("Error data:", error.response.data);
        console.log("Error status:", error.response.status);
        console.log("Error headers:", error.response.headers);
      } else if (error.request) {
        console.log("Error request:", error.request);
      } else {
        console.log("Error message:", error.message);
      }
      console.log("Error config:", error.config);
    }
  };
  return (
    <div className="login_signup">
      <div className="login_signup_container">
        <h1 className="login_heading">{loginState}</h1>
        <div className="login_signup_fields">
          {loginState === "Sign Up" ? (
            <input
              type="text"
              name="name"
              placeholder="your name..."
              value={formData.name}
              onChange={changeHandeler}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="email address..."
            name="email"
            value={formData.email}
            onChange={changeHandeler}
          />
          <input
            type="password"
            placeholder="password..."
            name="password"
            value={formData.password}
            onChange={changeHandeler}
          />
        </div>
        <button
          onClick={() => {
            loginState === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {loginState === "Sign Up" ? (
          <p className="login">
            Already have an account?
            <span onClick={() => setloginState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="login">
            Create an account?
            <span onClick={() => setloginState("Sign Up")}>Click here</span>
          </p>
        )}
        <div className="agree">
          {loginState === "Login" ? (
            ""
          ) : (
            <>
              <input type="checkbox" name="" id="" />
              <p>By continueing i agree to the terms of use & privacy policy</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
