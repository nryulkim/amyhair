import * as ColorAPI from '../util/api/color_api';
import {
  ADD_COLOR
} from '../actions/color_actions';

export default ({ getState, dispatch }) => next => action => {
  const success = color => {
    console.log("Added color");
    console.log(color);
  };
  let errors = () => { console.log("error"); };

  switch(action.type) {
    case ADD_COLOR:
      ColorAPI.newColor(action.color, success, errors);
      return next(action);

    default:
      return next(action);
  }
};
