class TeamMembership < ApplicationRecord
	validates :user_id, presence: true
	validates :team_id, presence: true
	
	belongs_to :team
	belongs_to :user
end
