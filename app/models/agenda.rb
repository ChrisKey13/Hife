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

class Agenda < ApplicationRecord
  belongs_to :meeting
  belongs_to :user
end
