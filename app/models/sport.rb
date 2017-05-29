class Sport < ApplicationRecord
	has_many :favorite_sports
	has_many :users, through: :favorite_sports
end
