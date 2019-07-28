import React, { Component } from "react";
import "./style.scss";

class Usercard extends Component {
  render() {
    return (
      <div className="userCard__Max">
        <div className="userCard__card">
          <div className="userCard__img">
            <text>悦达人</text>
          </div>
          <text className="userCard__name">更多内容敬请期待</text>
        </div>
      </div>
    )
  }
}

export default Usercard;