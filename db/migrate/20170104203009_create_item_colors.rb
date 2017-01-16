class CreateItemColors < ActiveRecord::Migration[5.0]
  def change
    create_table :item_colors do |t|
      t.integer :item_id, null: false
      t.integer :color_id, null: false
      t.timestamps
    end
  end
end
