function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      users = response;
      return users;
    });
}

fetchData();

const userData = users;

export default userData;
