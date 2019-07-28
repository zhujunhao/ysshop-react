import React, { Component } from 'react';
import UserHeader from "./components/UserHeader" ;

class User extends Component {
  render() {
    return (
      <div>
        <UserHeader onBack={this.handleBack} onLogout={this.handleLogout} />
      </div>
    )

  }
}

export default User;