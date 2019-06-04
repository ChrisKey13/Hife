# == Schema Information
#
# Table name: user_teams
#
#  id         :bigint           not null, primary key
#  user_id    :bigint
#  team_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class UserTeamTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
