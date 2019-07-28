import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./style.scss"

class HomeHeader extends Component {
  render() {
    return (
      <div className="homeHeader">
        <header className="homeHeader__wrapper">
          {/* <div className="homeHeader__city"></div> */}
          <Link to="/search" className="homeHeader__search">搜索更多优惠商品</Link>
          {/* <Link to="/user" className="homeHeader__self">
            <div className="homeHeader__portrait"/>
          </Link> */}
        </header>
      </div>
    );
  }
}

export default HomeHeader;