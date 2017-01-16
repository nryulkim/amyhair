export const GET_PRODUCT = "GET_PRODUCT";

export function getProduct(id){
  return({
    type: GET_PRODUCT,
    id
  });
};
