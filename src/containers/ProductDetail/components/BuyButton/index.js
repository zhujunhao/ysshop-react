import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class BuyButton extends Component {
  render() {
    const { productId } = this.props;
    return (
      <Link className="buyButton" to={`/purchase/${productId}`}>
        立即领券
      </Link>
    );
  }
}

export default BuyButton;
