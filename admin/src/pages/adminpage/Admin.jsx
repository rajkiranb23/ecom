import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../../components/addproduct/AddProduct";
import "./admin.css";
import ListProduct from "../../components/listproduct/ListProduct";
const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
