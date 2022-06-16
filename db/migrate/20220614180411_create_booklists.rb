class CreateBooklists < ActiveRecord::Migration[6.1]
  def change
    create_table :booklists do |t|
      t.integer "book_id"
      t.integer "list_id"

      t.timestamps
    end
  end
end
