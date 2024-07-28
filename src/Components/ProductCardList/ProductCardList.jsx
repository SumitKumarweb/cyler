import React, { useState } from "react";
import "./ProductCardList.css";
import "material-icons/iconfont/material-icons.css";
import TextReveal from "text-reveal";
import { Link } from "react-router-dom";
 
const ProductCard = () => {
  const [clicked, setClicked] = useState(false);

  const handleBuyClick = () => {
    setClicked(true);
  };

  const handleRemoveClick = () => {
    setClicked(false);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="top"></div>
        <div className={`bottom ${clicked ? "clicked" : ""}`}>
          <div className="left">
            <Link to="/productDetails">
              <div className="details">
                <h1>Social Media Hacking</h1>
                <button>Learn More</button>
              </div>
            </Link>
            <div className="buy" onClick={handleBuyClick}>
              <i className="material-icons">add_shopping_cart</i>
            </div>
          </div>
          <div className="right">
            <div className="done">
              <i className="material-icons">done</i>
            </div>
            <div className="details">
              <p>Added to your cart</p>
            </div>
            <div className="remove" onClick={handleRemoveClick}>
              <i className="material-icons">clear</i>
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <i className="material-icons">info_outline</i>
        </div>
        <div className="contents"></div>
      </div>
    </div>
  );
};

const ProductCardList = () => {
  return (
    <div className="card-container">
      <h2>
        <TextReveal
          text={["Our Courses"]}
          textColor="grey"
          fillColor="white"
          fillType="timer"
          fillDuration="2000"
        />
      </h2>
      <div className="wrapper-productList">
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductCardList;
