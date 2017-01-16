class CreateLengths < ActiveRecord::Migration[5.0]
  def change
    create_table :lengths do |t|
      t.integer :item_id, null: false
      t.integer :length

      t.timestamps
    end
  end
end
