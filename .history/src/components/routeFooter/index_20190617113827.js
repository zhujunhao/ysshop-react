import React , { Component } from 'react';
import '../../statics/icon/iconfont.css';
import './style.scss';

class RouteFooter extends Component {
    render() {
        return (
            <div className="Footer__div">
                <footer className="Footer__footer">
                    <div className="tab__div">
                        <span className="iconfont homepage">&#xe703;</span>
                        <span className="textPart" >首页</span>
                    </div>
                    <div className="tab__div">
                        <span className="iconfont">&#xe6ff;</span>
                        <span className="textPart" >我的</span>
                    </div>
                </footer>
            </div>
        )
    }
}

export default RouteFooter;