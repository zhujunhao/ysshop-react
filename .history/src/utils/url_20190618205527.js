export default {
  getProductList: (path, rowIndex, pageSize) => `/api/v0/lists/`,
  getProductDetail: (goodsNum) => `/api/v0/lists/${goodsNum}`,
  getShopById: (id) => `/mock/shops/${id}.json`,
  getPopularKeywords: () => '/mock/keywords/popular.json',
  getRelatedKeywords: (text) => `/api/v0/lists/$${text}`,
  getRelatedShops: (keyword) => `/mock/shops/related.json?keyword=${keyword}`,
  getOrders: () => `/mock/orders/orders.json`, 
}