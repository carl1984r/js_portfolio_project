class CreateAccountTransacts < ActiveRecord::Migration[5.2]
  def change
    create_table :account_transacts do |t|
      t.references :account, foreign_key: true
      t.references :transact, foreign_key: true

      t.timestamps
    end
  end
end
