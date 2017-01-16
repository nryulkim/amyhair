class FixColorColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :colors, :type, :color_type
  end
end
