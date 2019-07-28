export default {
  getProductList: (path, rowIndex, pageSize) => `/api/v0/lists/`,
  getProductDetail: (goodsNum) => `/api/v0/lists/${goodsNum}`,
  getShopById: (id) => `/mock/shops/${id}.json`,
  getPopularKeywords: () => `/mock/shops/${id}.json`,
  getRelatedKeywords: (text) => `/api/v0/lists/$${text}`,
  getRelatedShops: (keyword) => `/api/v0/lists/&${keyword}`,
  getOrders: () => `/mock/orders/orders.json`, 
}