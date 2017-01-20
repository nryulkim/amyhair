class UpdateFeatured < ActiveRecord::Migration[5.0]
  def change
    add_column :featureds, :name, :text
    add_column :featureds, :description, :text
    add_attachment :featureds, :img
  end
end
