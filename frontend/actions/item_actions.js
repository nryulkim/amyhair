export const GET_ITEM = "GET_ITEM";
export const GET_ITEMS = "GET_ITEMS";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const RECEIVE_NEW_ITEM = "RECEIVE_NEW_ITEM";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const NEW_ITEM = "NEW_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_CURRENT_ITEM = "REMOVE_CURRENT_ITEM";

export function getItem(id){
  return({
    type: GET_ITEM,
    id
  });
};

export function deleteItem(id){
  return({
    type: DELETE_ITEM,
    id
  });
};

export function removeItem(id){
  return({
    type: REMOVE_ITEM,
    id
  });
};

export function getItems(){
  return({
    type: GET_ITEMS
  });
};

export function removeCurrentItem(){
  return({
    type: REMOVE_CURRENT_ITEM
  });
};

export function updateItem(item){
  return({
    type: UPDATE_ITEM,
    item
  });
};

export function newItem(item){
  return({
    type: NEW_ITEM,
    item
  });
};

export function receiveNewItem(item){
  return({
    type: RECEIVE_NEW_ITEM,
    item
  });
};

export function receiveItem(item){
  return({
    type: RECEIVE_ITEM,
    item
  });
};

export function receiveItems(items){
  return({
    type: RECEIVE_ITEMS,
    items
  });
};
