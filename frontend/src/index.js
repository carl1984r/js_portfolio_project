
const BASE_URL = "http://localhost:3000";
const CLIENTS_URL = `${BASE_URL}/clients`;
const ACCOUNTS_URL = `${BASE_URL}/accounts`;
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

  let g
    for (g = table.rows.length - 1; g > 0; g--) {
      table.deleteRow(g)
    }

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
      let data = ["date", "transact_type", "description", "amount", "run"]
      let text = []

        for (let i = 0; i <= 4; ++i) {
          text[i] = document.createTextNode(`${account_transacts["attributes"][data[i]]}`)
        }

      let row = table.insertRow(1)

      let cell = []

        for (let i = 0; i <= 4; ++i) {
          cell[i] = row.insertCell(i)
          cell[i].appendChild(text[i])
          cell[i].style.textAlign = "center"
        }
    })

    let row = document.getElementsByTagName("tr")
      row[row.length-1].remove();

    let form = document.createElement('form')
      form.setAttribute("id", `${json.included[0]["id"]}`)
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

    let form0 = document.getElementsByTagName("form")

    if (form0.length > 1) {
      form0[1].remove();
    }

  } else {

  let form = document.getElementsByTagName("form")

  let g
    for (g = table.rows.length - 1; g > 0; g--) {
      table.deleteRow(g)
    }

    for(let i = 3; i < 8; i++) {
      th[i].textContent = ""
    }

    th[5].textContent = "No account activity"

    if (th[5].textContent == "No account activity") {
      form[0].remove();

    }
  }
}

class Transaction {
  constructor(description, amount, id, transact_type, running_balance) {
    this.description = description;
    this.amount = amount;
    this.id = id;
    this.transact_type = transact_type;
    this.running_balance = running_balance;
  }
}

function submitEvent() {
  let description = document.getElementById("description").value
  let amount = parseFloat((document.getElementById("amount").value).replace(/,/g, ""))
  let amountReg = /^\$?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/
  let id = document.getElementsByTagName("form")[0].id
  let transact_type = document.getElementsByTagName("select")[0].selectedOptions[0].value
  let run = parseFloat(document.getElementsByTagName("td")[14].textContent)
  let pre_balance = run + amount
  let running_balance = Math.ceil(pre_balance * 100)/100

  if (description != '' && amount != '') {
    if (amountReg.test(amount) && amount > 0) {
      let trans = new Transaction(description, amount, id, transact_type, running_balance)

      fetch(ACCOUNTS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trans),
      })
      alert("Account updated")
      fetchAccountTransacts(id)
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
    let data = ["name", "utilization", "number"]
    let link = []

      for (let i = 0; i <= 2; ++i) {
        link[i] = document.createTextNode(`${client_account["attributes"][data[i]]}`)
      }

    let a = []

      for (let i = 0; i <= 2; ++i) {
        a[i] = document.createElement('a')
        a[i].appendChild(link[i])
        a[i].onclick = function() {fetchAccountTransacts(`${client_account["id"]}`)}
      }

  let row = table.insertRow(1)
    row.className = 'uline'

  let cell = []

    for (let i = 0; i <= 2; ++i) {
      cell[i] = row.insertCell(i)
      cell[i].appendChild(a[i])
      cell[i].style.textAlign = "center"
    }
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
