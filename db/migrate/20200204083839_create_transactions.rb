class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.float :amount
      t.string :description
      t.string :type
      t.string :date

      t.timestamps
    end
  end
end
