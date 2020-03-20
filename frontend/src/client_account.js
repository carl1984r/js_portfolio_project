class ClientAccount {
  constructor(name, utilization, number, id) {
    this.name = name
    this.utilization = utilization
    this.number = number
    this.id = id
  }

  buildClientAccounts() {
    let table = document.querySelector('div.item.content-1 table#table2 tbody')
    let data = [this.name, this.utilization, this.number, this.id]
    let link = []
    let a = []
    let cell = []

    let row = table.insertRow(1)
        row.className = 'uline'

      for (let i = 0; i <= 2; ++i) {
        link[i] = document.createTextNode(`${data[i]}`)
        a[i] = document.createElement('a')
        a[i].appendChild(link[i])
        a[i].onclick = function() {fetchAccountTransacts(`${data[3]}`)}
        cell[i] = row.insertCell(i)
        cell[i].appendChild(a[i])
        cell[i].style.textAlign = "center"
      }
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
        a_client_account.buildClientAccounts()
  })
}

function fetchClientAccounts(id) {
  let url = `${CLIENT_ACCOUNTS_URL}/${id}`
  fetch(url).then(resp => resp.json()).then(json => renderClientAccounts(json))
}
