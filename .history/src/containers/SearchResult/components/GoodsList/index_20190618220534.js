import React, { Component } from "react";
import LikeItem from "../../../../components/LikeItem";
import "./style.scss"

class GoodsList extends Component {
    render() {
        console.log("goodspro",JSON.stringify(this.props))
        // const { typeLists } = ;
       
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