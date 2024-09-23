fetch("https://jsonplaceholder.typicode.com/users/4")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });
