export default {
  getProductList: (path, rowIndex, pageSize) => `/v0/lists/`,
  getProductDetail: (goodsNum) => `/mock/product_detail/566878456883.json`,
  getShopById: (id) => `/mock/shops/${id}.json`,
  getPopularKeywords: () => '/mock/keywords/popular.json',
  getRelatedKeywords: (text) => `/mock/keywords/related.json?keyword=${text}`,
  getRelatedShops: (keyword) => `/mock/shops/related.json?keyword=${keyword}`,
  getOrders: () => `/mock/orders/orders.json`, 
}