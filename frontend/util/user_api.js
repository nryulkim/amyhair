export const newUser = (user, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
    success,
    error
  });
};

export const destroyUser = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/users/${id}`,
    success,
    error
  });
};
