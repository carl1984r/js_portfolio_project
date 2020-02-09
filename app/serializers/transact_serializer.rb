class TransactSerializer
  include FastJsonapi::ObjectSerializer
  attributes :amount, :description, :transact_type, :date, :run
end
