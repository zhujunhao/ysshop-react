import React, { Component } from "react";
import LikeItem from "../../../../components/LikeItem";
import "./style.scss"

class GoodsList extends Component {
    render() {
        const { data } = this.props;
        console.log("goodspro",JSON.stringify(this.props))
        return (
            <div className="shopList">
                {data.map((item, index) => {
                  return <LikeItem key={item.goodsNum} datas={item.list[0]} />;
                })}
            </div>
        )
    }
}

export default GoodsList;