export const getItem = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/items/${id}`,
    success,
    error
  });
};
