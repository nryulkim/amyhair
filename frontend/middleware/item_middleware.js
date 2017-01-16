import * as ItemAPI from '../util/api/item_api';
import {
  GET_ITEM, NEW_ITEM, GET_ITEMS, UPDATE_ITEM,
  receiveItem, receiveNewItem, receiveItems
} from '../actions/item_actions';

export default ({ getState, dispatch }) => next => action => {
  let success = () => {
    $("#submit").prop("disabled",false).toggleClass("disabled");
    window.alert("success");
  };
  let errors = xhr => {
    $("#submit").prop("disabled",false).toggleClass("disabled");
    window.alert(xhr.responseJSON);
  };

  switch(action.type) {
    case GET_ITEMS:
      success = (items) => {
        dispatch(receiveItems(items));
      }
      ItemAPI.getAllItems(success, errors);
      return next(action);

    case GET_ITEM:
      success = (item) => {
        dispatch(receiveItem(item));
      }
      ItemAPI.getItem(action.id, success, errors);
      return next(action);

    case UPDATE_ITEM:
      success = (item) => {
        dispatch(receiveNewItem(item));
      }
      ItemAPI.updateItem(action.item, success, errors);
      return next(action);

    case NEW_ITEM:
      success = (item) => {
        dispatch(receiveNewItem(item));
      }
      ItemAPI.newItem(action.item, success, errors);
      return next(action);

    default:
      return next(action);
  }
};
