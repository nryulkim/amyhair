# == Schema Information
#
# Table name: products
#
#  id               :integer          not null, primary key
#  name             :string           not null
#  brand_id         :integer
#  description      :text
#  img_file_name    :string
#  img_content_type :string
#  img_file_size    :integer
#  img_updated_at   :datetime
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  bundle           :boolean
#

class Product < ApplicationRecord
  validates :name, presence: true
  has_attached_file :img, default_url: "/images/missing.jpg"
  validates_attachment_content_type :img, content_type: /\Aimage\/.*\z/

  belongs_to :brand
  has_many :items, dependent: :destroy
end
