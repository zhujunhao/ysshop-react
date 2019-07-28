import React , { Component } from 'react';
import { Link } from "react-router-dom";
import '../../statics/icon/iconfont.css';
import './style.scss';

class RouteFooter extends Component {
    render() {
        return (
            <div className="Footer__div">
                <div className="Footer__footer">
                    <Link to="/home" className="tab__div">
                        <span className="iconfont homepage">&#xe703;</span>
                        <span className="textPart homepagetext" >推荐</span>
                    </Link>
                    <Link to="/search" className="tab__div">
                        <span className="iconfont mypage">&#xe6ff;</span>
                        <span className="textPart mypagetext" >我的</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default RouteFooter;