import React, { Component } from "react";
import LikeItem from "../../../../components/LikeItem";
import "./style.scss"

class GoodsList extends Component {
    render() {
        console.log("goodspro",JSON.stringify(this.props.data))
        const { typeLists } = this.props.data;
        console.log("typeLists",JSON.stringify(typeLists))
        return (
            <div className="shopList">
                {/* {data.map((item, index) => {
                  return <LikeItem key={item.goodsNum} datas={item} />;
                })} */}
            </div>
        )
    }
}

export default GoodsList;