class FavoriteSport < ApplicationRecord
	validates :sport_id, presence: true
	validates :user_id, presence: true

	belongs_to :sport
	belongs_to :user
end
