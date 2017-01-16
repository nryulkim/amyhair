export const getAllColors = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/colors",
    success,
    error
  });
};

export const newColor = (color, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/colors",
    data: color,
    dataType: "json",
    contentType: false,
    processData: false,
    success,
    error
  });
};

export const updateColor = (color, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `/api/colors/${color.id}`,
    data: color,
    dataType: "json",
    contentType: false,
    processData: false,
    success,
    error
  });
};

export const destroyColor = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/colors/${id}`,
    success,
    error
  });
};
