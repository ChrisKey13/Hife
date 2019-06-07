# == Schema Information
#
# Table name: companies
#
#  id          :bigint           not null, primary key
#  name        :string
#  description :text
#  photo       :string
#  address     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Company < ApplicationRecord
  has_many :users, dependent: :destroy
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
end
