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

require 'test_helper'

class FeaturedTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
