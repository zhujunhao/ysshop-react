import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class ProductOverview extends Component {
  render() {
    console.log("de",JSON.stringify(this.props))
    const { list,relativeLists } = this.props.data.data;
    return (
      <div className="productOverview">
        <div className="productOverview__header">
          <div className="productOverview__imgContainer">
            <img
              alt=""
              className="productOverview__img"
              src={list.picGoods}
            />
          </div>
          <div className="productOverview__baseInfo">
            <div className="productOverview__title">{list.shopname}</div>
            <div className="productOverview__content">
             {list.titGoods}
            </div>
          </div>
        </div>
        <div className="productOverview__purchase">
          <span className="productOverview__symbol">¥</span>
          <span className="productOverview__price">{list.qhjGoods}</span>
          <span className="productOverview__price--old">¥{list.oriPrice}</span>
          <span className="productOverview__sale">{list.monthNum}</span>
        </div>
      </div>
    );
  }
}

export default ProductOverview;
