import * as ItemAPI from '../util/api/item_api';
import {
  GET_ITEM,
  receiveItem
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
    case GET_ITEM:
      success = (brands) => {
        dispatch(receiveItem(brands));
      }
      ItemAPI.getItem(action.id, success, errors);
      return next(action);

    default:
      return next(action);
  }
};
