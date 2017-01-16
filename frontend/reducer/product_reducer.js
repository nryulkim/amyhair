import {
  RECEIVE_PRODUCT
} from '../actions/product_actions';
import merge from "lodash/merge";

export default (state, action) => {
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_PRODUCT:
      newState.currentProduct = action.product;
      return newState;

    default:
      return newState;
  }
};
