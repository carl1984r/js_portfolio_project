class ClientAccountSerializer
  include FastJsonapi::ObjectSerializer
  attributes :client, :account
  belongs_to :client
  belongs_to :account
end
