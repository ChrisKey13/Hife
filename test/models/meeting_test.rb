# == Schema Information
#
# Table name: meetings
#
#  id                 :bigint           not null, primary key
#  name               :string
#  description        :text
#  start_time         :datetime
#  available_duration :integer
#  activity_id        :bigint
#  team_id            :bigint
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

require 'test_helper'

class MeetingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
