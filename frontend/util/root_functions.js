import { clearErrors } from '../actions/util_actions';
import { getAllColors } from '../actions/color_actions';
import { getBrands } from '../actions/brand_actions';
import { getProduct, getProducts } from '../actions/product_actions';
import { getItem } from '../actions/item_actions';

export const _redirectIfLoggedIn = (store) => {
  return ((nextState, replace) => {
    if(store.getState().session.currentUser){
      replace("/cpanel");
    }
    resetScreen();
  });
};

export const _redirectIfNotLoggedIn = (store) => {
  return ((nextState, replace) => {
    if(!store.getState().session.currentUser){
      replace("/login");
    }
    resetScreen();
  });
};

export const _getColors = (store) => {
  return (() => {
    if(!store.getState().colors.colors){
      store.dispatch(getAllColors());
    }
    resetScreen();
  });
};

export const _getBrands = (store) => {
  return (() => {
    if(!store.getState().brands.brands){
      store.dispatch(getBrands());
    }
    resetScreen();
  });
};

export const _getProducts = (store) => {
  return (() => {
    store.dispatch(getProducts());
    resetScreen();
  });
};

export const _getProduct = (store) => {
  return (() => {
    const id = parseInt(location.hash.split("/")[2]);
    store.dispatch(getProduct(id));
    resetScreen();
  });
};

export const _getItem = (store) => {
  return (() => {
    const id = parseInt(location.hash.split("/")[2]);
    store.dispatch(getItem(id));
    resetScreen();
  });
};

export const _clearErrors = (store) => {
  return (() => {
    store.dispatch(clearErrors());
  });
};

export const _controlPanel = (store) => {
  return (() => {
    _redirectIfNotLoggedIn(store)();
    _getColors(store)();
    _getBrands(store)();
    _getProducts(store)();
  });
};

function resetScreen(){
  window.scrollTo(0,0);
}
