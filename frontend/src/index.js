
const BASE_URL = "http://localhost:3000";
const CLIENTS_URL = `${BASE_URL}/clients`;

//$(document).ready(function() {
//  console.log('Hello World');
//  fetch(CLIENTS_URL).then(resp => resp.json())
//    .then(json => console.log(json));
//});

function fetchClients() {
  fetch(CLIENTS_URL).then(resp => resp.json()).then(json => renderClients(json));
  }

function fetchClient(id) {
  let url = `${CLIENTS_URL}/${id}`;
  fetch(url).then(resp => resp.json()).then(json => renderClient(json));
  }

function renderClient(json) {
  const td = document.querySelector('div.item.content-1 table tbody tr td')
  const thead = document.querySelector('div.item.content-1 table thead')
  const hr = document.createElement('hr')
  thead.appendChild(hr)
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
    //a.href = `${CLIENTS_URL}/${client.id}`
    a.onclick = function() {fetchClient(`${client.id}`)}
    li.appendChild(a)
    td.appendChild(li)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchClients()
})
