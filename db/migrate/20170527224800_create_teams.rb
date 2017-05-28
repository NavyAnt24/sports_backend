class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string :name, :null => false
      t.text :description

      t.belongs_to :organization, index: true

      t.timestamps
    end
  end
end
