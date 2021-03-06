import React, { Component } from 'react';
import "./style.scss";

class PopularSearch extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="popularSearch">
                {
                    data.map((item,index) => {
                        return (
                            <span key={item.id} onClick={this.handleClick.bind(this,item)} className="popularSearch__item">{item.keyword}</span>
                        )
                    })
                }
            </div>
        )
    }

    handleClick = (item) => {
        this.props.onClickItem(item);
    }
}

export default PopularSearch;