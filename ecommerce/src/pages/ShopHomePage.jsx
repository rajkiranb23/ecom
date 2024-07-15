import React from "react";
import Nav from "../components/nav/Nav";
import Banner from "../components/banner/Banner";
import Policy from "../components/policydetails/PolicyDetails";
import Category from "../components/category/Category";
import Offers from "../components/offers/Offers";
import NewArrivals from "../components/newarrivals/NewArrivals";

const ShopHomePage = () => {
  return (
    <div>
      <Banner />
      <Policy />
      <Category />
      <Offers />
      <NewArrivals />
    </div>
  );
};

export default ShopHomePage;
