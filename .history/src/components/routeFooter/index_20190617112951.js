import React , { Component } from 'react';
import '../../statics/icon/iconfont.css';
import './style.scss';

class RouteFooter extends Component {
    render() {
        return (
            <div className="Footer__div">
                <footer className="Footer__footer">
                    <div className="tab__div">
                        <div className="iconfont homepage"></div>
                        首页
                    </div>
                    <div className="tab__div">
                        <div className="iconfont group"></div>
                        我的
                    </div>
                </footer>
            </div>
        )
    }
}

export default RouteFooter;