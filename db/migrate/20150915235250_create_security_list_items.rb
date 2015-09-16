class CreateSecurityListItems < ActiveRecord::Migration
  def change
    create_table :security_list_items do |t|
      t.integer :security_list_id, null: false
      t.integer :security_id, null: false

      t.timestamps null: false
    end

    add_index :security_list_items, :security_list_id
    add_foreign_key :security_list_items, :security_lists
    add_index :security_list_items, :security_id
    add_foreign_key :security_list_items, :securities
  end
end
