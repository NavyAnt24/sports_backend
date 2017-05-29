# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

org = Organization.create(name: "Bay Area High School", description: "A school for Bay Area kids.")

team1 = Team.create(name: "Lunch buddies", description: "People who like lunch period.")
team2 = Team.create(name: "Cricket Club", description: "We like playing cricket.")
team3 = Team.create(name: "Nature Club", description: "We like nature and hiking.")

org.teams << [team1, team2, team3]

100.times do |n|
	user = User.create(
		first_name: Faker::Name.first_name,
		last_name: Faker::Name.last_name,
		email: Faker::Internet.email,
		height: rand(50) + 35,
		weight: rand(200) + 60
	)

	[team1, team2, team3].each do |team|
		if ([true, false].sample)
			team.users << user
		end
	end
end

sports = [
	'Badminton', 'Baseball', 'Basketball', 'Bowling', 'Boxing', 
	'Cricket', 'Football', 'Golf', 'Gymnastics', 'Ice Hockey', 
	'Rugby', 'Skiing', 'Soccer', 'Swimming', 'Tennis', 'Volleyball', 'Wrestling'
]

sports.each do |sport_name|
	Sport.create(name: sport_name)
end

begin_date = DateTime.new(2013, 1, 1)
end_date = DateTime.now

User.all.each do |user|
	# Add favorite sports
	user.sports = Sport.limit(3).order("RANDOM()")

	# Add random activities
	rand(1..5).times do |n|
		random_start_time = Time.at((end_date.to_f - begin_date.to_f)*rand + begin_date.to_f)
		random_length = rand(1..120)

		activity = Activity.create!(
			start_time: random_start_time,
			end_time: (random_start_time + random_length.minutes),
			length: random_length,
			user_id: user.id,
			sport_id: user.sports[rand(0..2)].id # pick one of the three sports
		)
	end
end
