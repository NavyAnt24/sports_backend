class Sport < ApplicationRecord
	has_many :users, through: :favorite_sports
end
