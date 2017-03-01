# == Schema Information
#
# Table name: colors
#
#  id               :integer          not null, primary key
#  color_type       :string           not null
#  name             :string           not null
#  img_file_name    :string
#  img_content_type :string
#  img_file_size    :integer
#  img_updated_at   :datetime
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Color < ApplicationRecord
  validates :name, :color_type, presence: true
  validates_uniqueness_of :name, scope: :color_type
  has_attached_file :img,
    styles: {
      thumb: '80x80'
    }
  validates_attachment_content_type :img, content_type: /\Aimage\/.*\z/

end
