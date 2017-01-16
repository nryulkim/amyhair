export const getItem = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/items/${id}`,
    success,
    error
  });
};

export const getAllItems = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/items",
    success,
    error
  });
};

export const newItem = (item, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/items",
    data: item,
    dataType: "json",
    contentType: false,
    processData: false,
    success,
    error
  });
};

export const updateItem = (item, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `/api/items/${item.get('item[id]')}`,
    data: item,
    dataType: "json",
    contentType: false,
    processData: false,
    success,
    error
  });
};

export const destroyItem = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/items/${id}`,
    success,
    error
  });
};
