# == Schema Information
#
# Table name: lengths
#
#  id         :integer          not null, primary key
#  item_id    :integer          not null
#  length     :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Length < ApplicationRecord
  validates :length, :item, presence: true

  belongs_to :item
  has_many :item_colors, dependent: :destroy
  has_many :colors, through: :item_colors
end
