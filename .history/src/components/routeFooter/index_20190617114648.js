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
                        <span className="textPart" >首页</span>
                    </Link>
                    <Link to="/search" className="tab__div">
                        <span className="iconfont">&#xe6ff;</span>
                        <span className="textPart" >我的</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default RouteFooter;