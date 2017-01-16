import * as ColorAPI from '../util/api/color_api';
import {
  ADD_COLOR, GET_ALL_COLORS, UPDATE_COLOR, DELETE_COLOR,
  receiveAllColors, receiveColor, removeColor
} from '../actions/color_actions';

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
    case ADD_COLOR:
      success = (color) => {
        dispatch(receiveColor(color));
      }
      ColorAPI.newColor(action.color, success, errors);
      return next(action);

    case DELETE_COLOR:
      success = (id) => {
        dispatch(removeColor(id));
      }
      ColorAPI.destroyColor(action.id, success, errors);
      return next(action);

    case UPDATE_COLOR:
      success = (color) => {
        dispatch(receiveColor(color));
      }
      ColorAPI.updateColor(action.color, success, errors);
      return next(action);

    case GET_ALL_COLORS:
      success = (colors) => {
        dispatch(receiveAllColors(colors));
      }
      ColorAPI.getAllColors(success, errors);
      return next(action);

    default:
      return next(action);
  }
};
