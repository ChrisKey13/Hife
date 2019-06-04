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

class Rating < ApplicationRecord
  belongs_to :meeting
  has_many :feedbacks
  belongs_to :manager, class_name: "User", foreign_key: "manager_id"
end
