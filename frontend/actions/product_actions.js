export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_NEW_PRODUCT = "RECEIVE_NEW_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const NEW_PRODUCT = "NEW_PRODUCT";

export function getProduct(id){
  return({
    type: GET_PRODUCT,
    id
  });
};

export function deleteProduct(id){
  return({
    type: DELETE_PRODUCT,
    id
  });
};

export function removeProduct(id){
  return({
    type: REMOVE_PRODUCT,
    id
  });
};

export function getProducts(){
  return({
    type: GET_PRODUCTS
  });
};

export function receiveProduct(product){
  return({
    type: RECEIVE_PRODUCT,
    product
  });
};

export function receiveNewProduct(product){
  return({
    type: RECEIVE_NEW_PRODUCT,
    product
  });
};

export function receiveProducts(products){
  return({
    type: RECEIVE_PRODUCTS,
    products
  });
};

export function newProduct(product){
  return({
    type: NEW_PRODUCT,
    product
  });
};
