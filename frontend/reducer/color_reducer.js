import {
  RECEIVE_ALL_COLORS, RECEIVE_COLOR, REMOVE_COLOR
} from '../actions/color_actions';
import merge from "lodash.merge";

export default (state, action) => {
  let newState = merge({}, state);
  let colorArr;
  switch(action.type){
    case RECEIVE_ALL_COLORS:
      newState = merge(newState, action.colors)
      return newState;

    case RECEIVE_COLOR:
      colorArr = newState.colors[action.color.color_type];
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

    case REMOVE_COLOR:
      colorArr = newState.colors[action.color.color_type];
      for (let i = 0; i < colorArr.length; i++) {
        if(colorArr[i].id === action.color.id){
          colorArr.splice(i, 1);
          break;
        }
      }

      return newState;

    default:
      return newState;
  }
};
