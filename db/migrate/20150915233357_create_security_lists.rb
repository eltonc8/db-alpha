class CreateSecurityLists < ActiveRecord::Migration
  def change
    create_table :security_lists do |t|

      t.timestamps null: false
    end
  end
end
