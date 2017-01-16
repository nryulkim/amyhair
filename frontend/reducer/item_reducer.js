import {
  RECEIVE_ITEM
} from '../actions/item_actions';
import merge from "lodash/merge";

export default (state, action) => {
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_ITEM:
      debugger
      newState.currentProduct = action.item;
      return newState;

    default:
      return newState;
  }
};
