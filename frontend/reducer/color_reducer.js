import {
} from '../actions/color_actions';
import merge from "lodash/merge";

export default (state, action) => {
  let newState = merge({}, state);

  switch(action.type){
    default:
      return newState;
  }
};
