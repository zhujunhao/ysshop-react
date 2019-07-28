import createReducer from "../../../utils/createReducer";

export const schema = {
  name: "keywords",
  goodsNum: "goodsNum"
};

const reducer = createReducer(schema.name);

export default reducer;

// selectors
export const getKeywordById = (state, goodsNum) => {
  return state.entities.keywords[goodsNum]
}
