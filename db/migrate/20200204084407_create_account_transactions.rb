class CreateAccountTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :account_transactions do |t|
      t.references :account, foreign_key: true
      t.references :transaction, foreign_key: true

      t.timestamps
    end
  end
end
