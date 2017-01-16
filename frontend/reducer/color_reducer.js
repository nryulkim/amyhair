import {
  RECEIVE_ALL_COLORS, RECEIVE_COLOR
} from '../actions/color_actions';
import merge from "lodash/merge";

export default (state, action) => {
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_ALL_COLORS:
      newState = merge(newState, action.colors)
      return newState;

    case RECEIVE_COLOR:
      const colorArr = newState.colors[action.color.color_type];
      let found = false;
      for (let i = 0; i < colorArr.length; i++) {
        if(colorArr[i].id === action.color.id){
          colorArr[i] = action.color;
          found = true;
          break;
        }
      }
      if(!found){
        colorArr.push(action.color)
      }

      return newState;

    default:
      return newState;
  }
};
