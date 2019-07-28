import React, { Component } from "react";
import LikeItem from "../../../../components/LikeItem";
import "./style.scss"

class GoodsList extends Component {
    render() {
        
        const { data } = this.props;
        // console.log("goodspro",JSON.stringify(data[0]))
        // const typeLists = data[0].typeLists;
        // console.log("typeLists",JSON.stringify(typeLists))
        return (
            <div className="shopList">
                { data[0] && data[0].typeLists ? data[0].typeLists.map((item, index) => {
                  return <LikeItem key={item.goodsNum} datas={item} />;
                }) : null}
            </div>
        )
    }
}

export default GoodsList;