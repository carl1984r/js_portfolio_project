
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
const footer = document.querySelector('div.item.footer')
const th = document.querySelectorAll("th")

function renderAccountTransacts(json) {
  let table = document.querySelector('div.item.content-2 table#table3 tbody')
  let hr1 = document.createElement('hr')

    caption2.textContent = "Account Balance/Transaction history"
    caption2.appendChild(hr1)

    table.classList.remove('fade-in')
    void table.offsetWidth
    table.classList.add('fade-in')

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

    let form = document.createElement('form')
    form.setAttribute("action", "")
    form.setAttribute("method", "post")
    footer.appendChild(form)

    form.classList.remove('fade-in')
    void form.offsetWidth
    form.classList.add('fade-in')

    let span0 = document.createElement('span')
    let hr2 = document.createElement('hr')
    span0.textContent = "Account Deposit/Withdrawal"
    span0.appendChild(hr2)
    form.appendChild(span0)

    let div = document.createElement('div')
    let transactionlabel = document.createElement('label')
    let descriptionlabel = document.createElement('label')
    let amountlabel = document.createElement('label')
    let divider0 = document.createElement('label')
    let divider1 = document.createElement('label')
    let divider2 = document.createElement('label')
    let transactionselection = document.createElement('select')
    let option0 = document.createElement('option')
    let option1 = document.createElement('option')
    let optionlabel0 = document.createTextNode("Credit")
    let optionlabel1 = document.createTextNode("Debit")
    let input0 = document.createElement("input")
    let input1 = document.createElement("input")
    let submit = document.createElement("input")

    transactionlabel.setAttribute("id", "label")
    descriptionlabel.setAttribute("class", "label")
    amountlabel.setAttribute("class", "label")
    divider0.setAttribute("class", "divider")
    divider1.setAttribute("class", "divider")
    divider2.setAttribute("id", "divider")

    input0.setAttribute("type", "text")
    input0.setAttribute("id", "description")
    input1.setAttribute("type", "text")
    input1.setAttribute("id", "amount")
    submit.setAttribute("type", "button")
    submit.setAttribute("onclick", "submitEvent()")
    submit.setAttribute("value", "Submit")

    option0.appendChild(optionlabel0)
    option1.appendChild(optionlabel1)
    option0.setAttribute("value", "credit")
    option1.setAttribute("value", "debit")

    transactionselection.appendChild(option0)
    transactionselection.appendChild(option1)
    transactionlabel.innerHTML = "Transaction Type:"
    descriptionlabel.innerHTML = "Description:"
    amountlabel.innerHTML = "Amount:"
    divider0.innerHTML = "|"
    divider1.innerHTML = "|"
    divider2.innerHTML = "|"
    div.appendChild(transactionlabel)
    div.appendChild(transactionselection)
    div.appendChild(divider0)
    div.appendChild(descriptionlabel)
    div.appendChild(input0)
    div.appendChild(divider1)
    div.appendChild(amountlabel)
    div.appendChild(input1)
    div.appendChild(divider2)
    div.appendChild(submit)
    form.appendChild(div)

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

function submitEvent() {
  let description = document.getElementById("description").value
  let amount = document.getElementById("amount").value
  let amountReg = /^\$?\d+(,\d{3})*(\.\d*)?$/
  let pointNum = parseFloat(amount)

  if (description != '' && amount != '') {
    if (amountReg.test(amount) && pointNum > 0) {
      alert("Account updated")
    } else {
      alert("Please input a valid amount")
    }
  } else {
    alert("Account Deposit/Withdrawal form must be fully completed")
  }
}

function renderClientAccounts(json) {
  let table = document.querySelector('div.item.content-1 table#table2 tbody')
  let table2 = document.querySelector('div.item.content-2 table#table3 tbody')

  table.classList.remove('fade-in')
  void table.offsetWidth
  table.classList.add('fade-in')

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
