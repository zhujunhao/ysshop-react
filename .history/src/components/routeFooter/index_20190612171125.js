import React , { Component } from 'react';
import './style.scss';

class RouteFooter extends Component {
    render() {
        return (
            <div className="Footer__div">
                <div className="Footer__footer">
                    <div className="tab__div">
                        首页
                    </div>
                    <div className="tab__div">
                        我的
                    </div>
                </div>
            </div>
        )
    }
}

export default RouteFooter;