import * as ProductAPI from '../util/api/product_api';
import {
  GET_PRODUCT, NEW_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS, UPDATE_PRODUCT,
  receiveProducts, receiveProduct, removeProduct, receiveNewProduct
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
    case GET_PRODUCTS:
      success = (products) => {
        dispatch(receiveProducts(products));
      }
      ProductAPI.getProducts(success, errors);
      return next(action);

    case GET_PRODUCT:
      success = (product) => {
        dispatch(receiveProduct(product));
      }
      ProductAPI.getProduct(action.id, success, errors);
      return next(action);

    case UPDATE_PRODUCT:
      success = (product) => {
        dispatch(receiveNewProduct(product));
      }
      ProductAPI.updateProduct(action.product, success, errors);
      return next(action);

    case DELETE_PRODUCT:
      success = (product) => {
        dispatch(removeProduct(product.id));
      }
      ProductAPI.destroyProduct(action.id, success, errors);
      return next(action);

    case NEW_PRODUCT:
      success = (product) => {
        dispatch(receiveNewProduct(product));
      }
      ProductAPI.createProduct(action.product, success, errors);
      return next(action);

    default:
      return next(action);
  }
};
