
const BASE_URL = "http://localhost:3000";
const CLIENTS_URL = `${BASE_URL}/clients`;
const CLIENT_ACCOUNTS_URL = `${BASE_URL}/client_accounts`;
const ACCOUNT_TRANSACTS_URL = `${BASE_URL}/account_transacts`;

function fetchClients() {
  fetch(CLIENTS_URL).then(resp => resp.json()).then(json => renderClients(json))
  }

function fetchClientAccounts(id) {
  let url = `${CLIENT_ACCOUNTS_URL}/${id}`
  fetch(url).then(resp => resp.json()).then(json => renderClientAccounts(json))
}

function fetchAccountTransacts(id) {
  let url = `${ACCOUNT_TRANSACTS_URL}/${id}`
  fetch(url).then(resp => resp.json()).then(json => renderAccountTransacts(json))
}

const caption1 = document.querySelector('div.item.content-1 table#table2 caption')
const caption2 = document.querySelector('div.item.content-2 table#table3 caption')
const th = document.querySelectorAll("th")

function renderAccountTransacts(json) {
  let table = document.querySelector('div.item.content-2 table#table3 tbody')
  let hr1 = document.createElement('hr')
    caption2.textContent = "Account Balance/Transaction history"
    caption2.appendChild(hr1)

  table.className = 'fade-in'

if (json.data.length > 0) {

  th[3].textContent = "Date"
  th[4].textContent = "Type"
  th[5].textContent = "Description"
  th[6].textContent = "Amount"
  th[7].textContent = "Balance"

  let hr
    for(let i = 3; i < 8; i++) {
      hr = document.createElement('hr')
      th[i].appendChild(hr)
    }

    json.included.slice().forEach(account_transacts => {
      let text0 = document.createTextNode(`${account_transacts["attributes"]["date"]}`)
      let text1 = document.createTextNode(`${account_transacts["attributes"]["transact_type"]}`)
      let text2 = document.createTextNode(`${account_transacts["attributes"]["description"]}`)
      let text3 = document.createTextNode(`${account_transacts["attributes"]["amount"]}`)
      let text4 = document.createTextNode(`${account_transacts["attributes"]["run"]}`)

      let row = table.insertRow(1)

      let cell0 = row.insertCell(0)
      let cell1 = row.insertCell(1)
      let cell2 = row.insertCell(2)
      let cell3 = row.insertCell(3)
      let cell4 = row.insertCell(4)

      cell0.appendChild(text0)
      cell1.appendChild(text1)
      cell2.appendChild(text2)
      cell3.appendChild(text3)
      cell4.appendChild(text4)

      cell0.style.textAlign = "center"
      cell1.style.textAlign = "center"
      cell2.style.textAlign = "center"
      cell3.style.textAlign = "center"
      cell4.style.textAlign = "center"
    })

  } else {

  let g
    for (g = table.rows.length - 1; g > 0; g--) {
      table.deleteRow(g)
    }

    for(let i = 3; i < 8; i++) {
      th[i].textContent = ""
    }

    th[5].textContent = "No account activity"
  }
}

function renderClientAccounts(json) {
  let table = document.querySelector('div.item.content-1 table#table2 tbody')
  let table2 = document.querySelector('div.item.content-2 table#table3 tbody')

  table.className = 'fade-in'

  let i
    for (i = table.rows.length - 1; i > 0; i--) {
      table.deleteRow(i)
    }
  let g
    for (g = table2.rows.length - 1; g > 0; g--) {
      table2.deleteRow(g)
    }

  for(let i = 3; i < 8; i++) {
    th[i].textContent = ""
  }

  th[0].textContent = "Account name"
  th[1].textContent = "Utilization"
  th[2].textContent = "Account number"

  caption2.className = 'fade-in'
  caption2.textContent = "Select an account to view Balance/Transaction history"

  let hr1 = document.createElement('hr')
    caption1.textContent = "Client account(s)"
    caption1.appendChild(hr1)

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

      a0.onclick = function() {fetchAccountTransacts(`${client_account["id"]}`)}
      a1.onclick = function() {fetchAccountTransacts(`${client_account["id"]}`)}
      a2.onclick = function() {fetchAccountTransacts(`${client_account["id"]}`)}

      let row = table.insertRow(1)

      row.className = 'uline'

      let cell0 = row.insertCell(0)
      let cell1 = row.insertCell(1)
      let cell2 = row.insertCell(2)

      cell0.appendChild(a0)
      cell1.appendChild(a1)
      cell2.appendChild(a2)

      cell0.style.textAlign = "center"
      cell1.style.textAlign = "center"
      cell2.style.textAlign = "center"
    })

  }

function renderClients(json) {
  const td = document.querySelector('div.item.sidebar table#table1 tr td')
  const caption = document.querySelector('div.item.sidebar table#table1 caption')
  const hr = document.createElement('hr')

  td.className = 'fade-in'

  caption.appendChild(hr)
  json.data.forEach(client => {
    let a = document.createElement('a')
    let li = document.createElement('li')
    let link = document.createTextNode(`${client["attributes"]["name"]}`)
    a.appendChild(link)
    a.onclick = function() {fetchClientAccounts(`${client["id"]}`)}
    li.appendChild(a)
    td.appendChild(li)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchClients()
})
