import React, { Component } from 'react';
import RouteFooter from "../../components/RouteFooter";
import Usercard from "./components/Usercard";


class User extends Component {
  render() {
    return (
      <div>
        <Usercard />
        <RouteFooter />
      </div>
    )

  }
}

export default User;