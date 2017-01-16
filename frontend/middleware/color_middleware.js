import * as ColorAPI from '../util/api/color_api';
import {
  ADD_COLOR, GET_ALL_COLORS,
  receiveAllColors
} from '../actions/color_actions';

export default ({ getState, dispatch }) => next => action => {
  let success = () => {
    window.alert("success");
  };
  let errors = () => {
    window.alert("error");
  };

  switch(action.type) {
    case ADD_COLOR:
      ColorAPI.newColor(action.color, success, errors);
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
