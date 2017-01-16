class CreateColors < ActiveRecord::Migration[5.0]
  def change
    create_table :colors do |t|
      t.string :type, null: false
      t.string :name, null: false
      t.attachment :img
      
      t.timestamps
    end
  end
end
