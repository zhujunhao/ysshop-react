import React, { Component } from "react";
import LikeItem from "../../../../components/LikeItem";
import "./style.scss"

class ShopList extends Component {
    render() {
        const { data } = this.props;
        console.log("goodspro",JSON.stringify(this.props))
        return (
            <div className="shopList">
              <div className="shopList__list">
                {data.map((item, index) => {
                  return <LikeItem key={item.goodsNum} datas={item.list[0]} />;
                })}
              </div>
          </div>
        )
    }
}

export default ShopList;