import React, { Component } from "react";
import LikeItem from "../../../../components/LikeItem";
import "./style.scss"

class GoodsList extends Component {
    render() {
        const { typeLists } = this.props.data[0];
        console.log("goodspro",JSON.stringify(typeLists))
        return (
            <div className="shopList">
                {typeLists.map((item, index) => {
                  return <LikeItem key={item.goodsNum} datas={item} />;
                })}
            </div>
        )
    }
}

export default GoodsList;