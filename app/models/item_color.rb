# == Schema Information
#
# Table name: item_colors
#
#  id         :integer          not null, primary key
#  item_id    :integer          not null
#  color_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ItemColor < ApplicationRecord
end
