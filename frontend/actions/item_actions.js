export const GET_ITEM = "GET_ITEM";
export const RECEIVE_ITEM = "RECEIVE_ITEM";

export function getItem(id){
  return({
    type: GET_ITEM,
    id
  });
};

export function receiveItem(item){
  return({
    type: RECEIVE_ITEM,
    item
  });
};
