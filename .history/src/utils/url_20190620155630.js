export default {
  getProductList: (path, rowIndex, pageSize) => `/api/v0/lists/`,
  getProductDetail: (goodsNum) => `/api/v0/lists/${goodsNum}`,
  getShopById: (goodsNum) => `/mock/shops/${goodsNum}.json`,
  getPopularKeywords: () => `/mock/keywords/popular.json`,
  getRelatedKeywords: (text) => `/api/v0/lists/${text}`,
  getRelatedShops: (keyword) => `/api/v0/lists/&${keyword}`,
  getOrders: () => `/mock/orders/orders.json`, 
}