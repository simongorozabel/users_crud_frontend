let requestOptions = {
  method: "GET",
  redirect: "follow",
};

export const getUsers = async () => {
  const data = await fetch(
    "https://users-crud-backend-07u5.onrender.com/users",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));

  return data;
};
