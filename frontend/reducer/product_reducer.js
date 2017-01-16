import {
  GET_PRODUCT
} from '../actions/product_actions';
import merge from "lodash/merge";

export default (state, action) => {
  let newState = merge({}, state);

  switch(action.type){
    case GET_PRODUCT:
      newState.product = action.id;
      return newState;

    default:
      return newState;
  }
};
