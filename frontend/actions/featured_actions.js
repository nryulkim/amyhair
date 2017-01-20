export const GET_FEATUREDS = "GET_FEATUREDS";
export const NEW_FEATURED = 'NEW_FEATURED';
export const UPDATE_FEATURED = 'UPDATE_FEATURED'
export const DELETE_FEATURED = 'DELETE_FEATURED'

export const RECEIVE_FEATUREDS = "RECEIVE_FEATUREDS";
export const RECEIVE_FEATURED = 'RECEIVE_FEATURED';
export const REMOVE_FEATURED = 'REMOVE_FEATURED'


export function getFeatureds() {
  return ({
    type: GET_FEATUREDS
  });
}

export function newFeatured(brand) {
  return ({
    type: NEW_FEATURED,
    brand
  });
}

export function updateFeatured(brand) {
  return ({
    type: UPDATE_FEATURED,
    brand
  });
}

export function deleteFeatured(id) {
  return ({
    type: DELETE_FEATURED,
    id
  });
}

export function receiveFeatureds(brands) {
  return ({
    type: RECEIVE_FEATUREDS,
    brands
  });
}

export function receiveFeatured(brand) {
  return ({
    type: RECEIVE_FEATURED,
    brand
  });
}

export function removeFeatured(id) {
  return ({
    type: REMOVE_FEATURED,
    id
  });
}
