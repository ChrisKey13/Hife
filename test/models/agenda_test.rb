# == Schema Information
#
# Table name: agendas
#
#  id          :bigint           not null, primary key
#  meeting_id  :bigint
#  duration    :integer
#  title       :string
#  description :text
#  user_id     :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class AgendaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
