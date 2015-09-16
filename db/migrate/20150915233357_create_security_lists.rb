class CreateSecurityLists < ActiveRecord::Migration
  def change
    create_table :security_lists do |t|
      t.string     :name, null: false
      t.string     :symbol

      t.timestamps null: false
    end
  end
end
