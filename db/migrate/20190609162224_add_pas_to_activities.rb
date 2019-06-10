class AddPasToActivities < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :pas, :integer
  end
end
