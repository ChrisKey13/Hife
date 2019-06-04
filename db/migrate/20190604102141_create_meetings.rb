class CreateMeetings < ActiveRecord::Migration[5.2]
  def change
    create_table :meetings do |t|
      t.string :name
      t.text :description
      t.datetime :start_time
      t.integer :available_duration
      t.references :activity, foreign_key: true
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
