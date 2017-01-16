class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.integer :brand_id
      t.text :description
      t.attachment :img
      t.timestamps
    end
  end
end
