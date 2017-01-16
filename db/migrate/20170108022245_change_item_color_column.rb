class ChangeItemColorColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :item_colors, :item_id, :length_id
  end
end
