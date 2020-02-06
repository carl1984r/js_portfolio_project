class AccountTransact < ApplicationRecord
  belongs_to :account
  belongs_to :transact
end
