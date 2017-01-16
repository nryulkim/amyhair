# == Schema Information
#
# Table name: featureds
#
#  id         :integer          not null, primary key
#  brand_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Featured < ApplicationRecord
  validates :brand, presence: true

  belongs_to :brand
end
