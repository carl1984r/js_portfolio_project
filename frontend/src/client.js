const td = document.querySelector('div.item.sidebar table#table1 tr td')
const caption = document.querySelector('div.item.sidebar table#table1 caption')
const hr = document.createElement('hr')

class Client {
  constructor(name, id) {
    this.name = name
    this.id = id
  }

  buildClient() {
    let data = [this.name, this.id]
    let name = document.createTextNode(`${data[0]}`)
    let a = document.createElement('a')
        a.onclick = function() {fetchClientAccounts(`${data[1]}`)}
        a.appendChild(name)
    let li = document.createElement('li')
        li.appendChild(a)
        td.appendChild(li)
  }
}

function renderClients(json) {

  td.className = 'fade-in'

  caption.appendChild(hr)

  json.data.forEach(client => {
    let a_client = new Client(client["attributes"]["name"], client["id"])
        a_client.buildClient()
  })
}

function fetchClients() {
  fetch(CLIENTS_URL).then(resp => resp.json()).then(json => renderClients(json))
  }
