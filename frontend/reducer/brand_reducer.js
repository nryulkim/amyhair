import {
  RECEIVE_BRANDS, RECEIVE_BRAND, REMOVE_BRAND
} from '../actions/brand_actions';
import merge from "lodash/merge";
import { findObject } from '../util/util_functions';

export default (state, action) => {
  let newState = merge({}, state);
  let brandArr;
  let index;
  switch(action.type){
    case RECEIVE_BRANDS:
      newState = merge(newState, action.brands);
      return newState;

    case RECEIVE_BRAND:
      index = findObject(newState.brands, action.brand.id);
      if(index !== -1){
        newState.brands[index] = action.brand;
      }else{
        newState.brands.push(action.brand);
      }
      return newState;

    case REMOVE_BRAND:
      index = findObject(newState.brands, action.id);

      if(index !== -1){
        newState.brands.splice(index, 1)
      }
      return newState;

    default:
      return newState;
  }
};
