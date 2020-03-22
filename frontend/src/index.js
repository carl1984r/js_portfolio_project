
const BASE_URL = "http://localhost:3000";
const CLIENTS_URL = `${BASE_URL}/clients`;
const ACCOUNTS_URL = `${BASE_URL}/accounts`;
const CLIENT_ACCOUNTS_URL = `${BASE_URL}/client_accounts`;
const ACCOUNT_TRANSACTS_URL = `${BASE_URL}/account_transacts`;

const caption1 = document.querySelector('div.item.content-1 table#table2 caption')
const caption2 = document.querySelector('div.item.content-2 table#table3 caption')
const footer = document.querySelector('div.item.footer')
const th = document.querySelectorAll("th")
const table = document.querySelector('div.item.content-2 table#table3 tbody')

function tableSort() {
  let rows, switching, i, x, y, doSwitch
  switching = true;
    while (switching) {

    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length); i++) {

      doSwitch = false;
      x = rows[i].getElementsByTagName("td")[3]
      y = rows[i + 1].getElementsByTagName("td")[3]

      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        doSwitch = true;
        break;
      }
    }
    if (doSwitch) {
     rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
     switching = true;
   }
 }
}

class FormattedDate {
  static getFormattedDate() {
      let date = new Date();
      let year = date.getFullYear();
      let month = (1 + date.getMonth()).toString().padStart(2, '0');
      let day = date.getDate().toString().padStart(2, '0');

      return month + day + year;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchClients()
})
