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

class Meeting < ApplicationRecord
  belongs_to :activity
  belongs_to :team
  has_many :ratings, dependent: :destroy
  has_many :agendas, dependent: :destroy
end
