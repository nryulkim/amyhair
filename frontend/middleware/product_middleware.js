import * as ProductAPI from '../util/api/product_api';
import {
  GET_PRODUCT,
  receiveProduct
} from '../actions/product_actions';

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
    case GET_PRODUCT:
      success = (brands) => {
        dispatch(receiveProduct(brands));
      }
      ProductAPI.getProduct(action.id, success, errors);
      return next(action);

    default:
      return next(action);
  }
};
