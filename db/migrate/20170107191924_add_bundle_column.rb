class AddBundleColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :bundle, :boolean
  end
end
