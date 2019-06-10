class Add1DurationToActivities < ActiveRecord::Migration[5.2]

  def change
    add_column :activities, :duration, :integer
  end
end
