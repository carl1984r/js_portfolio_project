class Account < ApplicationRecord
  has_many :client_accounts
  has_many :clients, through: :client_accounts
  has_many :account_transactions
  has_many :transactions, through: :account_transactions
end
