class CreateSecurities < ActiveRecord::Migration
  def change
    create_table :securities do |t|
      t.string     :symbol,   null: false
      t.string     :name
      t.string     :website
      t.string     :image
      t.string     :twitter_widget_id

      t.timestamps null: false
    end

    add_index :securities, :symbol, unique: true
  end
end
