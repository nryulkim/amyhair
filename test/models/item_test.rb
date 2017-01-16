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

require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
