export const ADD_COLOR = "ADD_COLOR";

export function addColor(color){
  return({
    type: ADD_COLOR,
    color
  });
};
