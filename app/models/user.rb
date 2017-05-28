class User < ApplicationRecord
	validates :first_name, presence: true
	validates :last_name, presence: true

	has_many :teams, through: :team_memberships
	has_many :sports, through: :favorite_sports
	has_many :activities
end
