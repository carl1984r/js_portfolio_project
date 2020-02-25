# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

clients_accounts_transactions = [
  [{name: "Don Morrissey", socialsec: "000000001", dob: "08082001", address: "807 W. 3rd St. Largo, FL 33771"}, {name: "Business Checking Account", number: "2082646", utilization: "checking"}, {name: "My Savings Account", number: "2082664", utilization: "savings"}, {amount: 1000, description: "Hancock Whitney - Credit", transact_type: "credit", date: "01042020", run: 2015.64 }, {amount: 63.95, description: "Bill Pay - Twitter", transact_type: "debit", date: "02042020", run: 2000.00 }],
  [{name: "Su Morrissey", socialsec: "000000002", dob: "02252003", address: "807 W. 3rd St. Largo, FL 33771"}, {name: "Savings Acct.", number: "2082647", utilization: "savings"}, {name: "Vacation Account", number: "2082670", utilization: "savings"}, {amount: 415.64, description: "Bill Pay - Shell", transact_type: "debit", date: "01042020", run: 2000.00 }, {amount: 14.80, description: "Bill Pay - Target", transact_type: "debit", date: "01022020", run: 2000.00 }],
  [{name: "Lewis Mays", socialsec: "000000003", dob: "09/04/1998", address: "9154 19th St. Jacksonville, FL 32211"}, {name: "Biz Checking", number: "2082650", utilization: "checking"}, {name: "Roth IRA Reserve", number: "2082676", utilization: "savings"}, {amount: 135.64, description: "Bill Pay - Exxon", transact_type: "debit", date: "01042020", run: 2000.00 }, {amount: 224.23, description: "IRS - Debit", transact_type: "debit", date: "01112020", run: 2000.00 }],
  [{name: "Tiff Braun", socialsec: "000000004", dob: "01/07/1991", address: "1556 N. 8th Pl. Pensacola, FL 32503"}, {name: "Savings Account", number: "2082651", utilization: "savings"}, {name: "Futures Reserve", number: "2082680", utilization: "savings"}, {amount: 175.64, description: "Bill Pay - Chevron", transact_type: "debit", date: "01042020", run: 2000.00 }, {amount: 7855.23, description: "Bill Pay - Discover", transact_type: "debit", date: "01142020", run: 2000.00 }]
]

clients_accounts_transactions.each do |f|
  client = Client.create(f[0])
  account = Account.create(f[1])
  account2 = Account.create(f[2])
  transact1 = Transact.create(f[3])
  transact2 = Transact.create(f[4])
  ClientAccount.create(client_id: client.id, account_id: account.id)
  ClientAccount.create(client_id: client.id, account_id: account2.id)
  AccountTransact.create(account_id: account.id, transact_id: transact1.id)
  AccountTransact.create(account_id: account2.id, transact_id: transact2.id)
end

accounts = [
  {name: "College Savings - Child 1", number: "2082648", utilization: "savings"},
  {name: "College Savings - Child 2", number: "2082649", utilization: "savings"}
]

trans = [
  {amount: 15.64, description: "Bill Pay - Visa", transact_type: "debit", date: "01042020", run: 2000.00 },
  {amount: 2557.80, description: "US Treasury", transact_type: "credit", date: "02022020", run: 4557.80  },
  {amount: 2451.15, description: "Bill Pay - Visa", transact_type: "debit", date: "02082020", run: 2106.65 },
  {amount: 5114.20, description: "UBS", transact_type: "credit", date: "03012020", run: 7220.85 }
]

accounts.each do |f|
  account = Account.create(f)
  ClientAccount.create(client_id: Client.all.first.id, account_id: account.id)
end

trans.each do |f|
  tran = Transact.create(f)
  AccountTransact.create(account_id: Account.all.first.id, transact_id: tran.id)
end
