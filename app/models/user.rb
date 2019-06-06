# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  first_name             :string
#  last_name              :string
#  company_id             :bigint
#  photo                  :string
#

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :feedbacks, dependent: :nullify
  has_many :agendas, dependent: :nullify
  has_many :managed_teams, foreign_key: "manager_id", class_name: 'Team', dependent: :destroy
  has_many :user_teams, dependent: :destroy
  has_many :ratings, through: :feedbacks
  has_many :teams, through: :user_teams
  belongs_to :company
  #mount_uploader :photo, PhotoUploader
end
