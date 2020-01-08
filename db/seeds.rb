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
