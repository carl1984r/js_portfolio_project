class AccountTransaction {
  constructor(description, amount, id, transact_type, running_balance, date) {
    this.description = description;
    this.amount = amount;
    this.id = id;
    this.transact_type = transact_type;
    this.running_balance = running_balance;
    this.date = date;
    this.updated_amount = (this.transact_type == "debit") ? this.amount*-1 : this.amount;
    this.updated_balance = this.updated_amount + this.running_balance;
  }

  buildAccountTransactions() {
    let data = [this.date, this.transact_type, this.description, this.amount, this.running_balance]
    let table = document.querySelector('div.item.content-2 table#table3 tbody')
    let row = table.insertRow(1)
    let text = []
    let cell = []

      for (let i = 0; i <= 4; ++i) {
        text[i] = document.createTextNode(`${data[i]}`)
        cell[i] = row.insertCell(i)
        cell[i].appendChild(text[i])
        cell[i].style.textAlign = "center"
      }
  }

  addAccountTransaction() {
    let row = table.insertRow(1);
    let data = [getFormattedDate(), this.transact_type, this.description, this.updated_amount, this.updated_balance];
    let text = [];
    let cell = [];
    for (let i = 0; i <= 4; ++i) {
          cell[i] = row.insertCell(i)
          text[i] = document.createTextNode(data[i])
          cell[i].appendChild(text[i])
          cell[i].style.textAlign = "center"
        }
  }
}

function renderAccountTransacts(json) {
  let hr1 = document.createElement('hr')

    caption2.textContent = "Account Balance/Transaction history"
    caption2.appendChild(hr1)

    table.classList.remove('fade-in')
    void table.offsetWidth
    table.classList.add('fade-in')

if (json.data.length > 0) {

  let sort_button = document.createElement("button")
    sort_button.setAttribute("id", "sort_button")
    sort_button.innerHTML = "Sort by amount"
    sort_button.onclick = function() {tableSort()}
    caption2.appendChild(sort_button)

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
        account_transaction.buildAccountTransactions()
    })

    let row = document.getElementsByTagName("tr")
        row[row.length-1].remove()

    let form = document.createElement('form')
        form.addEventListener('submit', event => {
        event.preventDefault()})
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
