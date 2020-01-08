class ClientAccount < ApplicationRecord
  belongs_to :client
  belongs_to :account 
end
