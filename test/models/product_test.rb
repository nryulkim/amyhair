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

require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
