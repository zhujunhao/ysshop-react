import React, { Component } from 'react';
import UserMain  from "./containers/UserMain";
import UserHeader from "./components/UserHeader" ;
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as userActions, getOrders, getCurrentTab } from "../../redux/modules";
import { actions as loginActions } from "../../redux/modules/login";

class User extends Component {
  render() {
    const { orders } = this.props
    return (
      <div>
        <UserHeader onBack={this.handleBack} onLogout={this.handleLogout} />
        <UserMain data={orders}/>
      </div>
    )

  }
}

export default User;