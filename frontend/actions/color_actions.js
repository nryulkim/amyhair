export const ADD_COLOR = "ADD_COLOR";
export const GET_ALL_COLORS = "GET_ALL_COLORS";
export const RECEIVE_ALL_COLORS = "RECEIVE_ALL_COLORS";
export const REMOVE_COLOR = "REMOVE_COLOR";
export const UPDATE_COLOR = "UPDATE_COLOR";
export const DELETE_COLOR = "DELETE_COLOR";
export const RECEIVE_COLOR = "RECEIVE_COLOR";

export function addColor(color){
  return({
    type: ADD_COLOR,
    color
  });
};

export function getAllColors(){
  return({
    type: GET_ALL_COLORS
  })
}

export function receiveAllColors(colors){
  return({
    type: RECEIVE_ALL_COLORS,
    colors
  })
}

export function removeColor(color){
  return({
    type: REMOVE_COLOR,
    color
  })
}

export function updateColor(color){
  return({
    type: UPDATE_COLOR,
    color
  })
}

export function deleteColor(id){
  return({
    type: DELETE_COLOR,
    id
  })
}

export function receiveColor(color){
  return({
    type: RECEIVE_COLOR,
    color
  })
}
