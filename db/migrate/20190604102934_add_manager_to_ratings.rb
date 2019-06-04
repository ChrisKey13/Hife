class AddManagerToRatings < ActiveRecord::Migration[5.2]
  def change
    add_reference :ratings, :manager, foreign_key: { to_table: :users }
  end
end
