class CreateTransacts < ActiveRecord::Migration[5.2]
  def change
    create_table :transacts do |t|
      t.float :amount
      t.string :description
      t.string :transact_type
      t.string :date

      t.timestamps
    end
  end
end
