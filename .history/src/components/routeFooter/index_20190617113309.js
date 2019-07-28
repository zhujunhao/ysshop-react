import React , { Component } from 'react';
import '../../statics/icon/iconfont.css';
import './style.scss';

class RouteFooter extends Component {
    render() {
        return (
            <div className="Footer__div">
                <footer className="Footer__footer">
                    <div className="tab__div">
                        <i className="iconfont homepage"></i>
                        首页
                    </div>
                    <div className="tab__div">
                        <i className="iconfont group">&#xe6ff;</i>
                        我的
                    </div>
                </footer>
            </div>
        )
    }
}

export default RouteFooter;