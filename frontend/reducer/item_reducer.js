import {
  RECEIVE_ITEM, RECEIVE_NEW_ITEM, RECEIVE_ITEMS
} from '../actions/item_actions';
import merge from "lodash.merge";
import { findObject } from '../util/util_functions';

export default (state, action) => {
  let newState = merge({}, state);
  let index;

  switch(action.type){
    case RECEIVE_ITEM:
      newState.currentItem = action.item;
      return newState;

    case RECEIVE_ITEMS:
      newState = merge(newState, action.items);
      return newState;

    case RECEIVE_NEW_ITEM:
      index = findObject(newState.items, action.item.id);
      if(index !== -1){
        newState.items[index] = action.item;
      }else{
        newState.items.push(action.item);
      }
      return newState;

    default:
      return newState;
  }
};
