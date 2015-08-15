class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.string  :title, null: false
      t.string  :shared_with
      t.string  :tags
      t.text    :note
      t.text    :body

      t.timestamps null: false
    end

    add_index :posts, :user_id
    add_foreign_key :posts, :users
  end
end
