import React, { useEffect, useState } from "react";
import "./listproduct.css";
import remove_icon from "../../assets/cross_icon.png";
const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    try {
      const response = await fetch(
        "https://rajkiranb23.onrender.com/allproducts",
        {
          mode: "cors",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
    console.log(allProducts);
  }, []);
  const removeProduct = async (id) => {
    console.log("Waiting to remove product with ID:", id);

    try {
      const response = await fetch("http://localhost:5000/removeproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        console.log("Product removed successfully");
        await fetchInfo();
      } else {
        const errorData = await response.json();
        console.error("Failed to remove product:", errorData.message);
      }
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };
  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="list_products_format">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Gender</p>
        <p>Remove</p>
      </div>
      <div className="list-product_all_products">
        <hr />
        {allProducts.map((product, i) => {
          return (
            <>
              <div key={i} className=" list_products_formated">
                <img src={product.image} className="product_image" alt="" />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <p>{product.gender}</p>
                <img
                  src={remove_icon}
                  className="list_product_remove_icon"
                  alt=""
                  onClick={() => removeProduct(product.id)}
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
