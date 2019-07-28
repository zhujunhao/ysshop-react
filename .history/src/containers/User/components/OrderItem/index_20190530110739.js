import React, { Component } from "react";
import "./style.css";

class OrderItem extends Component {
    render() {
        const {
            data: { title, statusText, orderPicUrl, channel, text, type, commentId },
            isCommenting
        } = this.props;
        return (
            <div className="orderItem">
                <div className="orderItem__title">
                    <span>{title}</span>
                </div>
            </div>
        )
    }
}