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

require 'test_helper'

class LengthTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
