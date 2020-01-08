class CreateClientAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :client_accounts do |t|
      t.references :client, foreign_key: true
      t.references :account, foreign_key: true

      t.timestamps
    end
  end
end
