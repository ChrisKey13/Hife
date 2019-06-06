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

class Team < ApplicationRecord
  has_many :meetings, dependent: :nullify
  has_many :user_teams
  has_many :users, through: :user_teams
  belongs_to :manager, class_name: "User", foreign_key: "manager_id"
end
