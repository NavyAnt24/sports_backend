class FavoriteSports < ActiveRecord::Migration[5.1]
  def change
	create_join_table :users, :sports, table_name: :favorite_sports do |t|
	  t.index :user_id
	  t.index :sport_id
	end
  end
end
