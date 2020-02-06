
const BASE_URL = "http://localhost:3000";
const CLIENTS_URL = `${BASE_URL}/clients`;
const CLIENT_ACCOUNTS_URL = `${BASE_URL}/client_accounts`;

//$(document).ready(function() {
//  console.log('Hello World');
//  fetch(CLIENTS_URL).then(resp => resp.json())
//    .then(json => console.log(json));
//});

function fetchClients() {
  fetch(CLIENTS_URL).then(resp => resp.json()).then(json => renderClients(json))
  }

function fetchClient(id) {
  let url = `${CLIENT_ACCOUNTS_URL}/${id}`
  fetch(url).then(resp => resp.json()).then(json => renderClient(json))
  }

function renderClient(json) {
  const caption = document.querySelector('div.item.content-1 table#table2 caption')
  const table = document.querySelector('div.item.content-1 table#table2 tbody')
  const table2 = document.querySelector('div.item.content-2')
  const th = document.querySelectorAll("th")

  th[0].textContent = "Account name"
  th[1].textContent = "Utilization"
  th[2].textContent = "Account number"

  table2.textContent = "Select an account to view Balance/Transaction history"

  let hr1 = document.createElement('hr')
    caption.textContent = "Client account(s)"
    caption.appendChild(hr1)

  let hr
    for(let i = 0; i < 3; i++) {
      hr = document.createElement('hr')
      th[i].appendChild(hr)
    }

    json.included.slice().reverse().forEach(client_account => {
      let link0 = document.createTextNode(`${client_account["attributes"]["name"]}`)
      let link1 = document.createTextNode(`${client_account["attributes"]["utilization"]}`)
      let link2 = document.createTextNode(`${client_account["attributes"]["number"]}`)

      let a0 = document.createElement('a')
      let a1 = document.createElement('a')
      let a2 = document.createElement('a')

      a0.appendChild(link0)
      a1.appendChild(link1)
      a2.appendChild(link2)

      a0.href = `http://www.google.com`

      let row = table.insertRow(1)

      row.href = "http://www.google.com/"

      let cell0 = row.insertCell(0)
      let cell1 = row.insertCell(1)
      let cell2 = row.insertCell(2)

      cell0.appendChild(a0)
      cell1.appendChild(a1)
      cell2.appendChild(a2)

      cell0.style.textAlign = "center"
      cell1.style.textAlign = "center"
      cell2.style.textAlign = "center"

      //a.href = `${CLIENT_ACCOUNTS_URL}/${client.id}`
      //a.onclick = function() {fetchClient(`${client["id]"]}`)}
      //li.appendChild(a)
      //td.appendChild(li)
    })

  }

function renderClients(json) {
  const td = document.querySelector('div.item.sidebar table#table1 tr td')
  const caption = document.querySelector('div.item.sidebar table#table1 caption')
  const hr = document.createElement('hr')
  caption.appendChild(hr)
  json.data.forEach(client => {
    let a = document.createElement('a')
    let li = document.createElement('li')
    let link = document.createTextNode(`${client["attributes"]["name"]}`)
    a.appendChild(link)
    //a.title = `${client.attributes}`
    //a.href = `${CLIENT_ACCOUNTS_URL}/${client.id}`
    a.onclick = function() {fetchClient(`${client["id"]}`)}
    li.appendChild(a)
    td.appendChild(li)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchClients()
})
