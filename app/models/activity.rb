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
  has_many :meetings, dependent: :destroy
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?

  validates :intensiveness, inclusion: { in: %w[low medium high] }

  def self.activities_seeded
    activities = Activity.where.not(latitude: nil, longitude: nil)
    activities_hash = {
      low: [],
      medium: [],
      high: []
    }
    activities.each do |activity|
      activities_hash[activity.intensiveness.downcase.to_sym] << activity
    end
    return activities_hash
  end
end
