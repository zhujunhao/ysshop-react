import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ProductOverview from "./components/ProductOverview";
import BuyButton from "./components/BuyButton";
import Header from "../../components/Header";
import {
  actions as detailActions,
  getProduct,
  getRelatedShop
} from "../../redux/modules/detail";


class ProductDetail extends Component {
  render() {
    const { product } = this.props;
    console.log("product1",JSON.stringify(product))
    return (
      <div>
        <Header title="商品详情" onBack={this.handleBack} grey />
        {product && <ProductOverview data={product} />}
        {product && (
          <div>
            <BuyButton productId={product.goodsNum} />
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    const { product } = this.props;
    if (!product) {
      const productId = this.props.match.params.id;
      this.props.detailActions.loadProductDetail(productId);
    } else if (!this.props.relatedShop) {
      this.props.detailActions.loadShopById(product.nearestShop);
    }
  }

  componentDidUpdate(preProps) {
    // 第一次获取到产品详情时，需要继续获取关联的店铺信息
    if (!preProps.product && this.props.product) {
      this.props.detailActions.loadShopById(this.props.product.nearestShop);
    }
  }

  handleBack = () => {
    this.props.history.goBack();
  };
}

const mapStateToProps = (state, props) => {
  const productId = props.match.params.goodsNum;
  return {
    product: getProduct(state, productId),
    relatedShop: getRelatedShop(state, productId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    detailActions: bindActionCreators(detailActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
