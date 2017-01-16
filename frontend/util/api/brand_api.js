export const getAllBrands = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/brands",
    success,
    error
  });
};

export const newBrand = (brand, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/brands",
    data: brand,
    dataType: "json",
    contentType: false,
    processData: false,
    success,
    error
  });
};

export const updateBrand = (brand, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `/api/brands/${brand.get('brand[id]')}`,
    data: brand,
    dataType: "json",
    contentType: false,
    processData: false,
    success,
    error
  });
};

export const destroyBrand = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/brands/${id}`,
    success,
    error
  });
};
