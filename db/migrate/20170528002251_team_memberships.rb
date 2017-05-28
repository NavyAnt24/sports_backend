class TeamMemberships < ActiveRecord::Migration[5.1]
  def change
  	create_join_table :team, :users, table_name: :memberships do |t|
	  t.index :team_id
	  t.index :user_id
	end
  end
end
