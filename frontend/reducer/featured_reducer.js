import {
  RECEIVE_FEATUREDS, RECEIVE_FEATURED, REMOVE_FEATURED
} from '../actions/featured_actions';
import merge from "lodash.merge";
import { findObject } from '../util/util_functions';

export default (state, action) => {
  let newState = merge({}, state);
  let featuredArr;
  let index;
  switch(action.type){
    case RECEIVE_FEATUREDS:
      newState = merge(newState, action.featureds);
      return newState;

    case RECEIVE_FEATURED:
      index = findObject(newState.featureds, action.featured.id);
      if(index !== -1){
        newState.featureds[index] = action.featured;
      }else{
        newState.featureds.push(action.featured);
      }
      return newState;

    case REMOVE_FEATURED:
      index = findObject(newState.featureds, action.id);

      if(index !== -1){
        newState.featureds.splice(index, 1)
      }
      return newState;

    default:
      return newState;
  }
};
