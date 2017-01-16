export const GET_PRODUCT = "GET_PRODUCT";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export function getProduct(id){
  return({
    type: GET_PRODUCT,
    id
  });
};

export function receiveProduct(product){
  return({
    type: RECEIVE_PRODUCT,
    product
  });
};
