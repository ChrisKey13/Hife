class AddManagerToTeams < ActiveRecord::Migration[5.2]
  def change
    add_reference :teams, :manager, foreign_key: { to_table: :users }
  end
end
