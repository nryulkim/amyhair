# == Schema Information
#
# Table name: brands
#
#  id               :integer          not null, primary key
#  brand            :string           not null
#  description      :text
#  img_file_name    :string
#  img_content_type :string
#  img_file_size    :integer
#  img_updated_at   :datetime
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Brand < ApplicationRecord
  validates :brand, presence: true
  has_attached_file :img, default_url: ActionController::Base.helpers.asset_path("backgrounds/back1.jpg", digest: false), url: ":rails_root/app/assets/images/brands/:filename"
  validates_attachment_content_type :img, content_type: /\Aimage\/.*\z/

  has_many :products, dependent: :destroy
  has_many :items, through: :products
  has_one :featured, dependent: :destroy
end
