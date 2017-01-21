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

export function newFeatured(featured) {
  return ({
    type: NEW_FEATURED,
    featured
  });
}

export function updateFeatured(featured) {
  return ({
    type: UPDATE_FEATURED,
    featured
  });
}

export function deleteFeatured(id) {
  return ({
    type: DELETE_FEATURED,
    id
  });
}

export function receiveFeatureds(featureds) {
  return ({
    type: RECEIVE_FEATUREDS,
    featureds
  });
}

export function receiveFeatured(featured) {
  return ({
    type: RECEIVE_FEATURED,
    featured
  });
}

export function removeFeatured(id) {
  return ({
    type: REMOVE_FEATURED,
    id
  });
}
