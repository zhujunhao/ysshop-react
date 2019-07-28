import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LikeList from "./components/LikeList";
import HomeHeader from "./components/HomeHeader";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import {
  actions as homeActions,
  getLikes,
  getDiscounts,
  getPageCountOfLikes
} from "../../redux/modules/home";

class Home extends Component {
  render() {
    const {likes, discounts, pageCount} = this.props
    return (
      <div>
        <HomeHeader />
        <Banner />
        <LikeList data = {likes} pageCount = {pageCount} fetchData = {this.fetchMoreLikes}/>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.props.homeActions.loadDiscounts();
  }

  fetchMoreLikes = () => {
    this.props.homeActions.loadLikes()
  }
}

const mapStateToProps = (state, props) => {
  return {
    likes: getLikes(state),
    discounts: getDiscounts(state),
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
