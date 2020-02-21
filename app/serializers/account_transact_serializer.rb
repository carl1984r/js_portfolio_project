class AccountTransactSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :account
  belongs_to :transact
end
