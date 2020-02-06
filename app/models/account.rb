class Account < ApplicationRecord
  has_many :client_accounts
  has_many :clients, through: :client_accounts
  has_many :account_transacts
  has_many :transacts, through: :account_transacts
end
