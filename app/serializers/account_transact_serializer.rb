class AccountTransactSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :transact
end
