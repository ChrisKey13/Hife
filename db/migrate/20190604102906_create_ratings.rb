class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.references :meeting, foreign_key: true
      t.string :question

      t.timestamps
    end
  end
end
