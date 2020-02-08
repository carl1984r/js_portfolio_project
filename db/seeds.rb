# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

clients = [
  [{name: "Don Morrissey", socialsec: "000000001", dob: "08082001", address: "807 W. 3rd St. Largo, FL 33771"}, {name: "Business Checking Account", number: "2082646", utilization: "checking"}],
  [{name: "Su Morrissey", socialsec: "000000002", dob: "02252003", address: "807 W. 3rd St. Largo, FL 33771"}, {name: "Savings Acct.", number: "2082647", utilization: "savings"}]
]

clients.each do |f|
  client = Client.create(f[0])
  account = Account.create(f[1])
  ClientAccount.create(client_id: client.id, account_id: account.id)
end

accounts = [
  {name: "College Savings - Child 1", number: "2082648", utilization: "savings"},
  {name: "College Savings - Child 2", number: "2082649", utilization: "savings"}
]

trans = [
  {amount: 15.64, description: "Bill Pay - Visa", transact_type: "debit", date: "01042020", run: 2000.00 },
  {amount: 2557.80, description: "US Treasury", transact_type: "credit", date: "03022020", run: 4557.80  },
  {amount: 2451.15, description: "Bill Pay - Visa", transact_type: "debit", date: "01042020", run: 2106.65 },
  {amount: 5114.20, description: "UBS", transact_type: "credit", date: "01042020", run: 7220.85 },
]

accounts.each do |f|
  account = Account.create(f)
  ClientAccount.create(client_id: Client.all.first.id, account_id: account.id)
end

trans.each do |f|
  tran = Transact.create(f)
  AccountTransact.create(account_id: Account.all.first.id, transact_id: tran.id)
end
