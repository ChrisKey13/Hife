class CreateFeedbacks < ActiveRecord::Migration[5.2]
  def change
    create_table :feedbacks do |t|
      t.references :user, foreign_key: true
      t.references :rating, foreign_key: true
      t.integer :answer

      t.timestamps
    end
  end
end
