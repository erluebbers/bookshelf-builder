class CreateLists < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.string "title"
      t.string "description"
      t.string "genre"
      t.string "creator"

      t.timestamps
    end
  end
end
