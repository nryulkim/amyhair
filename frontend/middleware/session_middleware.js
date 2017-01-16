import * as SessionAPI from '../util/session_api';
import {
  LOGIN, LOGOUT,
  receiveCurrentUser
} from '../actions/session_actions';
import { receiveErrors } from '../actions/util_actions'

export default ({ getState, dispatch }) => next => action => {
  const success = user => {
    dispatch(receiveCurrentUser(user, action.cb))
  };
  let errors;

  switch(action.type) {
    case(LOGIN):
      errors = xhr => {
        dispatch(receiveErrors(xhr.responseJSON, "logIn"))
      };

      SessionAPI.login(action.user, success, errors);
      return next(action);

    case(LOGOUT):
      SessionAPI.logout(() => { next(action) });
      break;

    default:
      return next(action);
  }
};
