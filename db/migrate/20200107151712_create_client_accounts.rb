class CreateClientAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :client_accounts do |t|
      t.integer :client_id
      t.integer :account_id

      t.timestamps
    end
  end
end
