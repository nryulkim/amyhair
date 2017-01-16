export const ADD_COLOR = "ADD_COLOR";
export const GET_ALL_COLORS = "GET_ALL_COLORS";
export const RECEIVE_ALL_COLORS = "RECEIVE_ALL_COLORS";

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
