
const BASE_URL = "http://localhost:3000";
const CLIENTS_URL = `${BASE_URL}/clients`;

$(document).ready(function() {
  console.log('Hello World');
  fetch(CLIENTS_URL).then(resp => resp.json())
    .then(json => console.log(json));
});
