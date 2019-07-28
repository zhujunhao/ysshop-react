import createReducer from "../../../utils/createReducer"

export const schema = {
  name: 'products',
  goodsNum: 'goodsNum',
} 

const reducer = createReducer(schema.name)

export default reducer;

//selectors
export const getProductDetail = (state, goodsNum) => {
  console.log("states",JSON.stringify(state))
  //const product = state.entities.products[goodsNum];
  const product = state.entities.products.goodsNum;
  console.log("productss",JSON.stringify(product))
  return product && product.detail && product.purchaseNotes ? product :  null;
}

export const getProductById = (state, goodsNum) => {
  return state.entities.products[goodsNum]
}