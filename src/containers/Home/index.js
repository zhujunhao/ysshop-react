import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LikeList from "./components/LikeList";
import HomeHeader from "./components/HomeHeader";
import Footer from "../../components/Footer";
import RouteFooter from "../../components/RouteFooter";
import Banner from "../../components/Banner";
import {
  actions as homeActions,
  getLikes,
  getPageCountOfLikes
} from "../../redux/modules/home";

class Home extends Component {
  render() {
    const {likes, pageCount} = this.props
    return (
      <div>
        <HomeHeader />
        <Banner />
        <LikeList data = {likes} pageCount = {pageCount} fetchData = {this.fetchMoreLikes}/>
        <Footer />
        <RouteFooter />
      </div>
    );
  }

  componentDidMount() {

  }

  fetchMoreLikes = () => {
    this.props.homeActions.loadLikes()
  }
}

const mapStateToProps = (state, props) => {
  return {
    likes: getLikes(state),
    pageCount: getPageCountOfLikes(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
