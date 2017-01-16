class ChangeLengthTypeColumn < ActiveRecord::Migration[5.0]
  def change
    change_column :lengths, :length, :text
  end
end
