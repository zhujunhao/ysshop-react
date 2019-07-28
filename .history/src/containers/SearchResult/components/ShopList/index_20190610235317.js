import React, { Component } from "react";
import ShopItem from "../ShopItem";
import "./style.scss"

class ShopList extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="shopList">
            <div className="shopList__list">
              {data.map((item, index) => {
                return (
                  <div key={item.id}>
                    <ShopItem data={item} />
                    {index < data.length - 1 ? (
                      <div className="shopList__divider" />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        )
    }
}

export default ShopList;