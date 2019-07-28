import { combineReducers } from "redux";
import url from "../../utils/url";
import { FETCH_DATA } from "../middleware/api";
import { schema as shopSchema, getShopById } from "./entities/shops";
import { schema as productSchema, getProductDetail, getProductById } from "./entities/products";

export const types = {
  // 获取产品详情
  FETCH_PRODUCT_DETAIL_REQUEST: "DETAIL/FETCH_PRODUCT_DETAIL_REQUEST",
  FETCH_PRODUCT_DETAIL_SUCCESS: "DETAIL/FETCH_PRODUCT_DETAIL_SUCCES",
  FETCH_PRODUCT_DETAIL_FAILURE: "DETAIL/FETCH_PRODUCT_DETAIL_FAILURE",
  // 获取关联店铺信息
  FETCH_SHOP_REQUEST: "DETAIL/FETCH_PRODUCT_DETAIL_REQUEST",
  FETCH_SHOP_SUCCESS: "DETAIL/FETCH_PRODUCT_DETAIL_SUCCES",
  FETCH_SHOP_FAILURE: "DETAIL/FETCH_PRODUCT_DETAIL_FAILURE"
};

const initialState = {
  product: {
    isFetching: false,
    goodsNum: null
  },
  relatedShop: {
    isFetching: false,
    goodsNum: null
  }
};

export const actions = {
  //获取商品详情
  loadProductDetail: goodsNum => {
    return (dispatch, getState) => {
      const product = getProductDetail(getState(), goodsNum);
      if (product) {
        return dispatch(fetchProductDetailSuccess(goodsNum));
      }
      const endpoint = url.getProductDetail(goodsNum);
      return dispatch(fetchProductDetail(endpoint, goodsNum));
    };
  },
  // 获取店铺信息
  loadShopById: goodsNum => {
    return (dispatch, getState) => {
      const shop = getShopById(getState(), goodsNum);
      if (shop) {
        return dispatch(fetchShopSuccess(goodsNum));
      }
      const endpoint = url.getShopById(goodsNum);
      return dispatch(fetchShopById(endpoint, goodsNum));
    };
  }
};

const fetchProductDetail = (endpoint, goodsNum) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_PRODUCT_DETAIL_REQUEST,
      types.FETCH_PRODUCT_DETAIL_SUCCESS,
      types.FETCH_PRODUCT_DETAIL_FAILURE
    ],
    endpoint,
    schema: productSchema
  },
  goodsNum
});

const fetchShopById = (endpoint, goodsNum) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_SHOP_REQUEST,
      types.FETCH_SHOP_SUCCESS,
      types.FETCH_SHOP_FAILURE
    ],
    endpoint,
    schema: shopSchema
  },
  goodsNum
});

const fetchProductDetailSuccess = goodsNum => ({
  type: types.FETCH_PRODUCT_DETAIL_SUCCESS,
  goodsNum
});

const fetchShopSuccess = goodsNum => ({
  type: types.FETCH_SHOP_SUCCESS,
  goodsNum
});

// 商品详情reducer
const product = (state = initialState.product, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCT_DETAIL_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_PRODUCT_DETAIL_SUCCESS:
      return { ...state, goodsNum: action.goodsNum, isFetching: false };
    case types.FETCH_PRODUCT_DETAIL_FAILURE:
      return { ...state, isFetching: false, goodsNum: null };
    default:
      return state;
  }
};

// 店铺reducer
const relatedShop = (state = initialState.relatedShop, action) => {
  switch (action.type) {
    case types.FETCH_SHOP_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_SHOP_SUCCESS:
      return { ...state, goodsNum: action.goodsNum, isFetching: false };
    case types.FETCH_SHOP_FAILURE:
      return { ...state, isFetching: false, goodsNum: null };
    default:
      return state;
  }
};

const reducer = combineReducers({
  product,
  relatedShop
});
export default reducer;

// selectors
//获取商品详情
export const getProduct = (state, goodsNum) => {
  return getProductDetail(state, goodsNum)
}

//获取管理的店铺信息
export const getRelatedShop = (state, productId) => {
  const product = getProductById(state, productId);
  let shopId = product ? product.nearestShop : null;
  if(shopId) {
    return getShopById(state, shopId);
  }
  return null;
}
