# == Schema Information
#
# Table name: ratings
#
#  id         :bigint           not null, primary key
#  meeting_id :bigint
#  question   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  manager_id :bigint
#

require 'test_helper'

class RatingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
