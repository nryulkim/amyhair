# == Schema Information
#
# Table name: item_colors
#
#  id         :integer          not null, primary key
#  length_id  :integer          not null
#  color_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ItemColor < ApplicationRecord
  belongs_to :color
  belongs_to :length
end
