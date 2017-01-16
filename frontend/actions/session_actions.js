export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export function login(user, cb){
  return({
    type: LOGIN,
    user,
    cb
  });
}

export function logout(){
  return({
    type: LOGOUT
  });
}

export function receiveCurrentUser(user, cb){
  return({
    type: RECEIVE_CURRENT_USER,
    user,
    cb
  });
}
