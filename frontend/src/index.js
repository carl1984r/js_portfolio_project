
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

  let hr
  let hrtextcontent = ["Date", "Type", "Description", "Amount", "Balance"]
    for(let i = 3; i < 8; i++) {
      hr = document.createElement('hr')
      th[i].textContent = hrtextcontent[i-3]
      th[i].appendChild(hr)
    }

  json.included.slice().forEach(account_transacts => {
    let account_transaction = new AccountTransaction(account_transacts["attributes"]["description"], account_transacts["attributes"]["amount"], account_transacts["id"], account_transacts["attributes"]["transact_type"],account_transacts["attributes"]["run"], account_transacts["attributes"]["date"])
    let data = ["date", "transact_type", "description", "amount", "running_balance"]
    let row = table.insertRow(1)
    let text = []
    let cell = []

      for (let i = 0; i <= 4; ++i) {
        text[i] = document.createTextNode(`${account_transaction[data[i]]}`)
        cell[i] = row.insertCell(i)
        cell[i].appendChild(text[i])
        cell[i].style.textAlign = "center"
      }

    })

    let row = document.getElementsByTagName("tr")
        row[row.length-1].remove()

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
    let transactionselection = document.createElement('select')

    let amountlabel = document.createElement('label')
        amountlabel.setAttribute("class", "label")
        amountlabel.innerHTML = "Amount:"

    let descriptionlabel = document.createElement('label')
        descriptionlabel.setAttribute("class", "label")
        descriptionlabel.innerHTML = "Description:"

    let transactionlabel = document.createElement('label')
        transactionlabel.setAttribute("id", "label")
        transactionlabel.innerHTML = "Transaction Type:"

    let divider = []
    let dividerattributes = ["class", "divider", "class", "divider", "id", "divider"]

      for (let i = 0; i <= 2; ++i) {
        divider[i] = document.createElement('label')
        divider[i].innerHTML = "|"
        divider[i].setAttribute(dividerattributes[i+i], dividerattributes[i+i+1])
      }

    let input = []
    let inputattributedata = ["description", "amount"]
    let option = []
    let optionlabel = []
    let optionlabeldata = ["Credit", "Debit"]
    let optionattributedata = ["credit", "debit"]

      for (let i = 0; i <= 1; ++i) {
        input[i] = document.createElement("input")
        input[i].setAttribute("type", "text")
        input[i].setAttribute("id", inputattributedata[i])
        option[i] = document.createElement('option')
        optionlabel[i] = document.createTextNode(optionlabeldata[i])
        option[i].appendChild(optionlabel[i])
        transactionselection.appendChild(option[i])
        option[i].setAttribute("value", optionattributedata[i])
      }

    let hidden0 = document.createElement("input")
        hidden0.setAttribute("type", "hidden")
        hidden0.setAttribute("id", "hidden0")
        hidden0.value = `${json.included[json.included.length-1].attributes.run}`

    let submit = document.createElement("input")
        submit.setAttribute("type", "button")
        submit.setAttribute("onclick", "submitEvent()")
        submit.setAttribute("value", "Submit")

    let divdata = [hidden0, transactionlabel, transactionselection, divider[0], descriptionlabel, input[0], divider[1], amountlabel, input[1], divider[2], submit]

      for (let i = 0; i <= 10; ++i) {
        div.appendChild(divdata[i])
      }

        form.appendChild(div)

    let form0 = document.getElementsByTagName("form")

    if (form0.length > 1) {
      form0[0].remove();
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
      form[0].remove()
    }
  }
}

class AccountTransaction {
  constructor(description, amount, id, transact_type, running_balance, date) {
    this.description = description;
    this.amount = amount;
    this.id = id;
    this.transact_type = transact_type;
    this.running_balance = running_balance;
    this.date = date;
  }
}

function submitEvent() {
  let description = document.getElementById("description").value
  let amount = parseFloat((document.getElementById("amount").value).replace(/,/g, ""))
  let amountReg = /^\$?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/
  let id = document.getElementsByTagName("form")[0].id
  let transact_type = document.getElementsByTagName("select")[0].selectedOptions[0].value
  let running_balance = parseFloat(document.getElementById("hidden0").value)

  if (description != '' && amount != '') {
    if (amountReg.test(amount) && amount > 0) {
      let account_transaction = new AccountTransaction(description, amount, id, transact_type, running_balance)

      fetch(ACCOUNTS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(account_transaction),
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

class ClientAccount {
  constructor(name, utilization, number, id) {
    this.name = name
    this.utilization = utilization
    this.number = number
    this.id = id
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

  th_data = ["Account name", "Utilization", "Account number"]

    for (let i = 0; i <= 2; ++i) {
      th[i].textContent = th_data[i]
    }

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
    let a_client_account = new ClientAccount(client_account["attributes"]["name"], client_account["attributes"]["utilization"], client_account["attributes"]["number"], client_account["id"])
    let data = ["name", "utilization", "number"]
    let link = []
    let a = []

      for (let i = 0; i <= 2; ++i) {
        link[i] = document.createTextNode(`${a_client_account[data[i]]}`)
        a[i] = document.createElement('a')
        a[i].appendChild(link[i])
        a[i].onclick = function() {fetchAccountTransacts(`${a_client_account.id}`)}
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

class Client {
  constructor(name, id) {
    this.name = name
    this.id = id
  }
}

function renderClients(json) {
  const td = document.querySelector('div.item.sidebar table#table1 tr td')
  const caption = document.querySelector('div.item.sidebar table#table1 caption')
  const hr = document.createElement('hr')

  td.className = 'fade-in'

  caption.appendChild(hr)
  json.data.forEach(client => {
    let a_client = new Client(client["attributes"]["name"], client["id"])
    let name = document.createTextNode(`${a_client.name}`)
    let a = document.createElement('a')
        a.onclick = function() {fetchClientAccounts(`${a_client.id}`)}
        a.appendChild(name)
    let li = document.createElement('li')
        li.appendChild(a)
        td.appendChild(li)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchClients()
})
