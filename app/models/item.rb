# == Schema Information
#
# Table name: items
#
#  id               :integer          not null, primary key
#  name             :string           not null
#  product_id       :integer
#  description      :text
#  img_file_name    :string
#  img_content_type :string
#  img_file_size    :integer
#  img_updated_at   :datetime
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Item < ApplicationRecord
  validates :name, presence: true
  has_attached_file :img, default_url: ActionController::Base.helpers.asset_path("backgrounds/back1.jpg"), url: ":rails_root/app/assets/images/items/:filename"
  validates_attachment_content_type :img, content_type: /\Aimage\/.*\z/

  belongs_to :product
  has_many :lengths
  has_many :colors, through: :lengths
end
