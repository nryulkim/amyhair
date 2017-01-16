import {
  RECEIVE_ALL_COLORS
} from '../actions/color_actions';
import merge from "lodash/merge";

export default (state, action) => {
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_ALL_COLORS:
      debugger
      newState = merge(newState, action.colors)
      return newState;

    default:
      return newState;
  }
};
