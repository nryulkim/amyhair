import { createStore } from 'redux';
import RootReducer from '../reducer/root_reducer.js';
import RootMiddleware from '../middleware/root_middleware.js';
import merge from 'lodash.merge';

const _default = {
  session: {
    currentUser: null,
    forms: {
      logIn:{
        errors: []
      }
    }
  },
  colors: {

  }
}

export default (state = {}) => {
  state = merge(_default, state);


  return createStore(
    RootReducer,
    state,
    RootMiddleware
  );
};
