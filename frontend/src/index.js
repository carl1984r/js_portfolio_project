
const BASE_URL = "http://localhost:3000";
const CLIENTS_URL = `${BASE_URL}/clients`;
const ACCOUNTS_URL = `${BASE_URL}/accounts`;
const CLIENT_ACCOUNTS_URL = `${BASE_URL}/client_accounts`;
const ACCOUNT_TRANSACTS_URL = `${BASE_URL}/account_transacts`;

const caption1 = document.querySelector('div.item.content-1 table#table2 caption')
const caption2 = document.querySelector('div.item.content-2 table#table3 caption')
const footer = document.querySelector('div.item.footer')
const th = document.querySelectorAll("th")
const td = document.querySelector('div.item.sidebar table#table1 tr td')
const caption = document.querySelector('div.item.sidebar table#table1 caption')
const hr = document.createElement('hr')

class FormattedDateOrTableSort {
  static getFormattedDate() {
      let date = new Date();
      let year = date.getFullYear();
      let month = (1 + date.getMonth()).toString().padStart(2, '0');
      let day = date.getDate().toString().padStart(2, '0');

      return month + day + year;
  }

  static tableSort() {
    let table = document.querySelector('div.item.content-2 table#table3 tbody')
    let rows, switching, step, firstRow, secondRow, doSwitch
    switching = true;
      while (switching) {
        switching = false;
        rows = table.rows;
        const rowsLength = rows.length-1
        for (step = 1; step < (rowsLength); step++) {

          doSwitch = false;
          firstRow = rows[step].getElementsByTagName("td")[3]
          secondRow = rows[step + 1].getElementsByTagName("td")[3]

          if (Number(firstRow.innerHTML) > Number(secondRow.innerHTML)) {
            doSwitch = true;
          break;
          }
        }
        if (doSwitch) {
         rows[step].parentNode.insertBefore(rows[step + 1], rows[step]);
         switching = true;
        }
      }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchClients()
})
