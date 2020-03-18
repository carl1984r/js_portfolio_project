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
