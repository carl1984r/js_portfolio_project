
const BASE_URL = "http://localhost:3000";
const CLIENTS_URL = `${BASE_URL}/clients`;

//$(document).ready(function() {
//  console.log('Hello World');
//  fetch(CLIENTS_URL).then(resp => resp.json())
//    .then(json => console.log(json));
//});

function fetchClients() {
  return fetch(CLIENTS_URL)

  .then(function(response) {
      return response.json();
    })

    .then(function(json) {
      renderClients(json);
    });
}

function renderClients(json) {
  const td = document.querySelector('div.item.sidebar table tbody tr td')
  const thead = document.querySelector('div.item.sidebar table thead')
  const hr = document.createElement('hr')
  thead.appendChild(hr)
  json.forEach(client => {
    let a = document.createElement('a')
    let li = document.createElement('li')
    let link = document.createTextNode(`${client.name}`);
    a.appendChild(link)
    a.title = `${client.name}`
    a.href = "http://www.google.com"
    li.appendChild(a)
    td.appendChild(li)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchClients()
})
