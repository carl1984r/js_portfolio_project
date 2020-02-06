class Transact < ApplicationRecord
  has_many :client_accounts
  has_many :accounts, through: :client_accounts
  has_many :account_transacts
  has_many :accounts, through: :account_transacts
end
