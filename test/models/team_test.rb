# == Schema Information
#
# Table name: teams
#
#  id                    :bigint           not null, primary key
#  name                  :string
#  description           :text
#  average_age           :float
#  desired_intensiveness :string
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  manager_id            :bigint
#

require 'test_helper'

class TeamTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
