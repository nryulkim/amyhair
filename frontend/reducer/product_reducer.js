import {
  RECEIVE_PRODUCT, RECEIVE_PRODUCTS, RECEIVE_NEW_PRODUCT, REMOVE_PRODUCT
} from '../actions/product_actions';
import merge from "lodash/merge";
import { findObject } from '../util/util_functions';

export default (state, action) => {
  let newState = merge({}, state);
  let index;
  switch(action.type){
    case RECEIVE_PRODUCT:
      newState.currentProduct = action.product;
      return newState;

    case REMOVE_PRODUCT:
      index = findObject(newState.products, action.id);

      if(index !== -1){
        newState.products.splice(index, 1)
      }
      return newState;

    case RECEIVE_NEW_PRODUCT:
      newState.products.push(action.product)
      return newState;

    case RECEIVE_PRODUCTS:
      newState = merge(newState, action.products);
      return newState;

    default:
      return newState;
  }
};
