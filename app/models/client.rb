class Client < ApplicationRecord
  has_many :client_accounts
  has_many :accounts, through: :client_accounts
end
