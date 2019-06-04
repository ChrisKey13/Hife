class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :name
      t.text :description
      t.string :address
      t.string :intensiveness
      t.string :photo

      t.timestamps
    end
  end
end
