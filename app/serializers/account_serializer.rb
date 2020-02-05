class AccountSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :number, :utilization
end
