class AddInfoToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_reference :users, :company, foreign_key: true
    add_reference :users, :team, foreign_key: true
    add_column :users, :photo, :string
  end
end
