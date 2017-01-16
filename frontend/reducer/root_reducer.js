import { combineReducers } from "redux";
import ProductReducer from "./product_reducer"
import SessionReducer from "./session_reducer"
export default combineReducers({
  session: SessionReducer,
  products: ProductReducer
});
