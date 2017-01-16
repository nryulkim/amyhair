export const getProduct = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/products/${id}`,
    success,
    error
  });
};
