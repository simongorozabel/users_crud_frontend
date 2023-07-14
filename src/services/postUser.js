export const postUser = async (raw) => {
  var requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow",
  };

  console.log(raw);

  const data = await fetch(
    "https://users-crud-backend-07u5.onrender.com/users",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return data;
};
