class ClientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :address
end
