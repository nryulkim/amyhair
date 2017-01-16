export const GET_BRANDS = "GET_BRANDS";
export const NEW_BRAND = 'NEW_BRAND';
export const UPDATE_BRAND = 'UPDATE_BRAND'
export const DELETE_BRAND = 'DELETE_BRAND'

export const RECEIVE_BRANDS = "RECEIVE_BRANDS";
export const RECEIVE_BRAND = 'RECEIVE_BRAND';
export const REMOVE_BRAND = 'REMOVE_BRAND'


export function getBrands() {
  return ({
    type: GET_BRANDS
  });
}

export function newBrand(brand) {
  return ({
    type: NEW_BRAND,
    brand
  });
}

export function updateBrand(brand) {
  return ({
    type: UPDATE_BRAND,
    brand
  });
}

export function deleteBrand(id) {
  return ({
    type: DELETE_BRAND,
    id
  });
}

export function receiveBrands(brands) {
  return ({
    type: RECEIVE_BRANDS,
    brands
  });
}

export function receiveBrand(brand) {
  return ({
    type: RECEIVE_BRAND,
    brand
  });
}

export function removeBrand(id) {
  return ({
    type: REMOVE_BRAND,
    id
  });
}
