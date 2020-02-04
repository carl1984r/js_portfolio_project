class AccountTransaction < ApplicationRecord
  belongs_to :account
  belongs_to :transaction
end
