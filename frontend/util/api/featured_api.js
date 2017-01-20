export const getAllFeatureds = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/featureds",
    success,
    error
  });
};

export const newFeatured = (featured, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/featureds",
    data: featured,
    dataType: "json",
    contentType: false,
    processData: false,
    success,
    error
  });
};

export const updateFeatured = (featured, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `/api/featureds/${featured.get('featured[id]')}`,
    data: featured,
    dataType: "json",
    contentType: false,
    processData: false,
    success,
    error
  });
};

export const destroyFeatured = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/featureds/${id}`,
    success,
    error
  });
};
