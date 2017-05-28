class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.integer :sport_id, :null => false
      t.integer :length, :null => false # in minutes

      t.timestamps
    end
  end
end
