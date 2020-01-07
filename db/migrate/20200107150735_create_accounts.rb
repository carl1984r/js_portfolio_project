class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :name
      t.integer :number
      t.string :type

      t.timestamps
    end
  end
end
