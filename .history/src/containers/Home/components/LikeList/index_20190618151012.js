import React, { Component } from "react";
import LikeItem from "../LikeItem";
import Loading from "../../../../components/Loading";
import "./style.scss";

class LikeList extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.removeListener = false;
  }

  render() {
    const { data, pageCount } = this.props;
    console.log("propslist",JSON.stringify(this.props))
    if (data[0] && data[0].lists && data[0].lists.length > 0) {
        const { lists } = data[0];
        data = lists;
        console.log("datalist",JSON.stringify(lists))
    }

    return (
      <div ref={this.myRef} className="likeList">
        <div className="likeList__list">
          {data.map((item, index) => {
            return <LikeItem key={index} datas={item.lists[0]} />;
          })}
        </div>
        {pageCount < 3 ? (
          <Loading />
        ) : (
          <a className="likeList__viewAll">查看更多</a>
        )}
      </div>
    );
  }

  componentDidMount() {
    if(this.props.pageCount < 3 ) {
      document.addEventListener("scroll", this.handleScroll);
    }else {
      this.removeListener = true;
    }
    if(this.props.pageCount === 0) {
      this.props.fetchData();
    }
  }

  componentDidUpdate() {
    if (this.props.pageCount >= 3 && !this.removeListener) {
      document.removeEventListener("scroll", this.handleScroll);
      this.removeListener = true;
    }
  }

  componentWillUnmount() {
    if (!this.removeListener) {
      document.removeEventListener("scroll", this.handleScroll);
    }
  }

  // 处理屏幕滚动事件，实现加载更多的效果
  handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const screenHeight = document.documentElement.clientHeight;
    const likeListTop = this.myRef.current.offsetTop;
    const likeListHeight = this.myRef.current.offsetHeight;
    if (scrollTop >= likeListHeight + likeListTop - screenHeight) {
      this.props.fetchData();
    }
  };
}

export default LikeList;
