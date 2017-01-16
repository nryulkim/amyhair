import { combineReducers } from "redux";
import ProductReducer from "./product_reducer"
import SessionReducer from "./session_reducer"
import ColorReducer from "./color_reducer"
import BrandReducer from "./brand_reducer"
import ItemReducer from "./item_reducer"

export default combineReducers({
  session: SessionReducer,
  products: ProductReducer,
  colors: ColorReducer,
  brands: BrandReducer,
  items: ItemReducer
});
