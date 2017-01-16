import * as BrandAPI from '../util/api/brand_api';
import {
  NEW_BRAND, GET_BRANDS, UPDATE_BRAND, DELETE_BRAND,
  receiveBrands, receiveBrand, removeBrand
} from '../actions/brand_actions';

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
    case NEW_BRAND:
      success = (brand) => {
        dispatch(receiveBrand(brand));
      }
      BrandAPI.newBrand(action.brand, success, errors);
      return next(action);

    case DELETE_BRAND:
      success = (brand) => {
        dispatch(removeBrand(brand.id));
      }
      BrandAPI.destroyBrand(action.id, success, errors);
      return next(action);

    case UPDATE_BRAND:
      success = (brand) => {
        dispatch(receiveBrand(brand));
      }
      BrandAPI.updateBrand(action.brand, success, errors);
      return next(action);

    case GET_BRANDS:
      success = (brands) => {
        dispatch(receiveBrands(brands));
      }
      BrandAPI.getAllBrands(success, errors);
      return next(action);

    default:
      return next(action);
  }
};
