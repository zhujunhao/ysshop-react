import createReducer from "../../../utils/createReducer";

export const schema = {
  name: "shops",
  goodsNum: "goodsNum"
};

const reducer = createReducer(schema.name);

export default reducer;

// selectors
export const getShopById = (state, goodsNum) => {
  const shop = state.entities.shops[goodsNum];
  return shop;
};
