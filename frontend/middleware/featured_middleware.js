import * as FeaturedAPI from '../util/api/featured_api';
import {
  NEW_FEATURED, GET_FEATUREDS, UPDATE_FEATURED, DELETE_FEATURED,
  receiveFeatureds, receiveFeatured, removeFeatured
} from '../actions/featured_actions';

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
    case NEW_FEATURED:
      success = (featured) => {
        dispatch(receiveFeatured(featured));
      }
      FeaturedAPI.newFeatured(action.featured, success, errors);
      return next(action);

    case DELETE_FEATURED:
      success = (featured) => {
        dispatch(removeFeatured(featured.id));
      }
      FeaturedAPI.destroyFeatured(action.id, success, errors);
      return next(action);

    case UPDATE_FEATURED:
      success = (featured) => {
        dispatch(receiveFeatured(featured));
      }
      FeaturedAPI.updateFeatured(action.featured, success, errors);
      return next(action);

    case GET_FEATUREDS:
      success = (featureds) => {
        dispatch(receiveFeatureds(featureds));
      }
      FeaturedAPI.getAllFeatureds(success, errors);
      return next(action);

    default:
      return next(action);
  }
};
