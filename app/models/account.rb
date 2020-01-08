class Account < ApplicationRecord
  has_many :client_accounts
  has_many :clients, through: :client_accounts
end
