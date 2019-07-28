import React , { Component } from 'react';
import './style.scss';

class RouterFooter extends Component {
    render() {
        return (
            <div className="Footer__div">
                <div className="tab__div">
                    <text className="tab__text">首页</text>
                </div>
                <div className="tab__div">
                    <text className="tab__text">我的</text>
                </div>
            </div>
        )
    }
}

export default RouterFooter;