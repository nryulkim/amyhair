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

  belongs_to :brand

  def name
    self[:name] || self.brand.brand
  end

  def description
    self[:description] || self.brand.description
  end

  def img
    self[:img]|| self.brand.img
  end

  def org_img
    self[:img]
  end
end
