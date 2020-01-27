
const BASE_URL = "http://localhost:3000";
const CLIENTS_URL = `${BASE_URL}/clients`;
const CLIENT_ACCOUNTS_URL = `${BASE_URL}/client_accounts`;

//$(document).ready(function() {
//  console.log('Hello World');
//  fetch(CLIENTS_URL).then(resp => resp.json())
//    .then(json => console.log(json));
//});

function fetchClients() {
  fetch(CLIENTS_URL).then(resp => resp.json()).then(json => renderClients(json.data));
  }

function fetchClient(id) {
  let url = `${CLIENT_ACCOUNTS_URL}/${id}`;
  fetch(url).then(resp => resp.json()).then(json => renderClient(json.data));
  }

function renderClient(json) {
  const td = document.querySelector('div.item.content-1 table tbody tr td')
  const thead = document.querySelector('div.item.content-1 table#table2 caption')
  const hr = document.createElement('hr')
  thead.appendChild(hr)
}

function renderClients(json) {
  const td = document.querySelector('div.item.sidebar table#table1 tr td')
  const caption = document.querySelector('div.item.sidebar table#table1 caption')
  const hr = document.createElement('hr')
  caption.appendChild(hr)
  json.forEach(client => {
    let a = document.createElement('a')
    let li = document.createElement('li')
    let link = document.createTextNode(`${client["attributes"]["name"]}`);
    a.appendChild(link)
    //a.title = `${client.attributes}`
    //a.href = `${CLIENT_ACCOUNTS_URL}/${client.id}`
    a.onclick = function() {fetchClient(`${client["id]"]}`)}
    li.appendChild(a)
    td.appendChild(li)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchClients()
})
