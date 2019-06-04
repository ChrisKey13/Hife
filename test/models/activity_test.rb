# == Schema Information
#
# Table name: activities
#
#  id            :bigint           not null, primary key
#  name          :string
#  description   :text
#  address       :string
#  intensiveness :string
#  photo         :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class ActivityTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
