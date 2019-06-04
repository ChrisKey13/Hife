class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name
      t.text :description
      t.float :average_age
      t.string :desired_intensiveness

      t.timestamps
    end
  end
end
