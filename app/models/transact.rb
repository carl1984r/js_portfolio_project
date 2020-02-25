class Transact < ApplicationRecord
  has_many :account_transacts
  has_many :accounts, through: :account_transacts

  def determine_amount(transact_type, amount)
    transact_type == "debit" ? amount*-1 : amount
  end
end
