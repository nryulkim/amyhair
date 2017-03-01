# == Schema Information
#
# Table name: featureds
#
#  id               :integer          not null, primary key
#  brand_id         :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  name             :text
#  description      :text
#  img_file_name    :string
#  img_content_type :string
#  img_file_size    :integer
#  img_updated_at   :datetime
#

class Featured < ApplicationRecord
  validates :brand, presence: true
  has_attached_file :img,
    styles: {
      large: '800'
    }
  validates_attachment_content_type :img, content_type: /\Aimage\/.*\z/

  belongs_to :brand
end
