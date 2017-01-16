import { RECEIVE_CURRENT_USER,  LOGOUT } from '../actions/session_actions';
import { RECEIVE_ERRORS } from '../actions/util_actions.js'
import merge from "lodash.merge";

const defaultForms = {
  logIn: {errors: []},
};

const defaultState = {
  currentUser: null,
  forms: defaultForms
};

export default (state = defaultState, action) => {
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      newState.forms = defaultForms;
      window.setTimeout(() => action.cb(), 200);
      return newState;

    case RECEIVE_ERRORS:
      if(["signUp", "logIn"].includes(action.formType)){
        newState.forms = merge({}, defaultForms, {
          [action.formType]: { errors: action.errors }
        });
      }
      return newState;

    case LOGOUT:
      return defaultState;

    default:
      return state;
  }
};
