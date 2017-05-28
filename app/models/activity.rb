class Activity < ApplicationRecord
	belongs_to :user
	belongs_to :sport

	validates :start_time, 
			  :end_time, 
			  :length, 
			  presence: true
end
