import { combineReducers } from "redux";
import ProductReducer from "./product_reducer"
import SessionReducer from "./session_reducer"
import ColorReducer from "./color_reducer"

export default combineReducers({
  session: SessionReducer,
  products: ProductReducer,
  colors: ColorReducer
});
