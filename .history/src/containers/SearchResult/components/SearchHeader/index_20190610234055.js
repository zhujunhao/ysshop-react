import React, { Component } from 'react';
import "./style.scss";

class SearchHeader extends Component {
    render() {
        const { onBack, onSearch} = this.props;
        return (
            <header className="searchHeader">
                <div className="searchHeader__back" onClick={onBack}></div>
                <div className="searchHeader__list">
                </div>
                <div className="searchHeader__icon" onClick={onSearch}></div>
            </header>
        )
    }
}

export default SearchHeader;