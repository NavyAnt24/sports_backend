class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.belongs_to :sport
      t.belongs_to :user

      t.time :start_time, :null => false
      t.time :end_time, :null => false

      t.integer :length, :null => false

      t.timestamps
    end
  end
end
