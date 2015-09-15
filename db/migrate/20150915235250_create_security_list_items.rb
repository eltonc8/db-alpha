class CreateSecurityListItems < ActiveRecord::Migration
  def change
    create_table :security_list_items do |t|

      t.timestamps null: false
    end
  end
end
