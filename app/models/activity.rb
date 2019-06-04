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

class Activity < ApplicationRecord
  has_many :meetings
end
