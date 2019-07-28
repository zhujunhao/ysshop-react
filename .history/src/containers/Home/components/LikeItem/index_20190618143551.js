import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./style.scss"

class LikeItem extends Component {
  render() {
    const {
      goodsNum,
      listTypes,
      picGoods,
      titGoods,
      qhjGoods,
      CouponNum,
      oriPrice,
      monthNum
    } = this.props.datas;
    console.log("this.props",JSON.stringify(this.props))
    console.log("listTypes",JSON.stringify(listTypes))
    return (
      <Link className="likeItem" to={`/detail/${goodsNum}`} >
        <div className="likeItem__picContainer">
          <div className="likeItem__picTag">{listTypes[0]}</div>
          <div className="likeItem__picdiv">
            <img alt="" className="likeItem__pic" src={picGoods} />
          </div>
        </div>
        <div className="likeItem__content">
          <div className="likeItem__product">{titGoods}</div>
          <div className="likeItem__info">
            <div className="likeItem__couponNum">券{CouponNum}元</div>
            <div className="likeItem__sale">月销{monthNum}</div>
          </div>
          <div className="likeItem__price">
            <span className="likeItem__name">券后</span>
            <ins className="likeItem__currentPrice">{qhjGoods}</ins>
            <del className="likeItem__oldPrice">{oriPrice}</del>
          </div>
        </div>
      </Link>
    );
  }
}

export default LikeItem;
