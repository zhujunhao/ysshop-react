import React , { Component } from 'react';
import { Link } from "react-router-dom";
import '../../statics/icon/iconfont.css';
import './style.scss';

class RouteFooter extends Component {
    constructor () {
        super();
        this.state = {
            currentIndex: '0'
        }
    }

    changeIndex = (nowIndex) => {
        this.setState({
            currentIndex : nowIndex
        })
    }

    render() {
        return (
            <div className="Footer__div">
                <div className="Footer__footer">
                    <Link to="/" className="tab__div" onClick={()=> {this.changeIndex('0')}}>
                        <span className={`iconfont homepage ${'0'==this.state.currentIndex?"active":null}`} >&#xe703;</span>
                        <span className={`textPart homepagetext ${'0'==this.state.currentIndex?"active":null}`} >推荐</span>
                    </Link>
                    <Link to="/User" className="tab__div" onClick={()=> {this.changeIndex('1')}}>
                        <span className={`iconfont mypage ${'1'==this.state.currentIndex?"active":null}`}>&#xe6ff;</span>
                        <span className={`textPart mypagetext ${'1'==this.state.currentIndex?"active":null}`} >我的</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default RouteFooter;