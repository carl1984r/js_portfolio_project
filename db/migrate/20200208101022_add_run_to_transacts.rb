class AddRunToTransacts < ActiveRecord::Migration[5.2]
  def change
    add_column :transacts, :run, :float
  end
end
