class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name, :null => false
      t.string :last_name, :null => false
      t.string :email
      t.integer :height # in inches
      t.integer :weight # in pounds

      t.boolean :profile_visible

      t.timestamps
    end
  end
end
