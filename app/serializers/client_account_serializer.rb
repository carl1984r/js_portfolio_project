class ClientAccountSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :account
end
