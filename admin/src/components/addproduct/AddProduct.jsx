import React, { useState } from "react";
import "./addproduct.css";
import upload_area_img from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    gender: "",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name + " " + e.target.value);
  };

  const addProduct = async () => {
    let product = productDetails;

    try {
      let formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "shgjwcgd");
      formData.append("cloud_name", "dvp8s6mdm");

      const cloudinaryResponse = await fetch(
        "https://api-ap.cloudinary.com/v1_1/dvp8s6mdm/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const cloudinaryData = await cloudinaryResponse.json();
      product.image = cloudinaryData.url;

      console.log(product);

      const response = await fetch("http://localhost:5000/addproduct", {
        // Changed to http
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();
      if (data.success) {
        alert("Product added successfully");
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="addproduct">
      <div className="add_product_item_fields">
        <p>Product Title</p>
        <input
          type="text"
          name="name"
          placeholder="Type Product name"
          value={productDetails.name}
          onChange={changeHandler}
        />
      </div>
      <div className="add_product_price">
        <div className="add_product_item_fields">
          <p>Price</p>
          <input
            type="text"
            name="old_price"
            placeholder="Type Product old price"
            value={productDetails.old_price}
            onChange={changeHandler}
          />
        </div>
        <div className="add_product_item_fields">
          <p>Offer Price</p>
          <input
            type="text"
            name="new_price"
            placeholder="Type Product new price"
            value={productDetails.new_price}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="add_product_item_fields">
        <p>Product Category</p>
        <select
          name="category"
          className="add_product_selector"
          value={productDetails.category}
          onChange={changeHandler}
        >
          <option value="">Select Category</option>
          <option value="clothing">clothing</option>
          <option value="sneakers">sneakers</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="add_product_item_fields">
        <p>Product Gender</p>
        <select
          name="gender"
          className="add_product_selector"
          value={productDetails.gender}
          onChange={changeHandler}
        >
          <option value="">Select Gender</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="boy">boy</option>
          <option value="girl">girl</option>
        </select>
      </div>
      <div className="product_item_fields">
        <label htmlFor="file_input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area_img}
            className="add_product_thumb_img"
            alt=""
          />
          <input
            type="file"
            name="image"
            id="file_input"
            hidden
            onChange={imageHandler}
          />
        </label>
      </div>
      <button className="add_product_btn" onClick={addProduct}>
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
