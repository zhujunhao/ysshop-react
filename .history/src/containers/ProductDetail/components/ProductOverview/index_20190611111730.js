import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class ProductOverview extends Component {
  render() {
    const {id, shop, picture, description, currentPrice, oldPrice} = this.props.data;
    return (
      <div className="productOverview">
        <div className="productOverview__header">
          <div className="productOverview__imgContainer">
            <img
              alt=""
              className="productOverview__img"
              src={picture}
            />
          </div>
          <div className="productOverview__baseInfo">
            <div className="productOverview__title">{shop}</div>
            <div className="productOverview__content">
             {description}
            </div>
          </div>
        </div>
        <div className="productOverview__purchase">
          <span className="productOverview__symbol">¥</span>
          <span className="productOverview__price">{currentPrice}</span>
          <span className="productOverview__price--old">¥{oldPrice}</span>
          <span className="productOverview__sale">已售6666</span>
        </div>
      </div>
    );
  }
}

export default ProductOverview;
