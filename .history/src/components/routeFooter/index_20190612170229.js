import React , { Component } from 'react';
import './style.scss';

class RouteFooter extends Component {
    render() {
        return (
            <div className="Footer__div">
                <footer className="Footer__footer">
                    <div className="tab__div">
                        <text className="tab__text">首页</text>
                    </div>
                    <div className="tab__div">
                        woe1
                        <text className="tab__text">我的</text>
                    </div>
                </footer>
            </div>
        )
    }
}

export default RouteFooter;