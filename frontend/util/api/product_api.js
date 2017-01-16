export const getProduct = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/products/${id}`,
    success,
    error
  });
};

export const getProducts = (success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/products/`,
    success,
    error
  });
};

export const createProduct = (product, success, error) => {
  $.ajax({
    method: "POST",
    url: '/api/products/',
    data: product,
    dataType: "json",
    contentType: false,
    processData: false,
    success,
    error
  });
};

export const updateProduct = (product, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `/api/products/${product.get('product[id]')}`,
    data: product,
    dataType: "json",
    contentType: false,
    processData: false,
    success,
    error
  });
};

export const destroyProduct = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/products/${id}`,
    success,
    error
  });
};
