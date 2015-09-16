# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150915235250) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "posts", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.string   "title",       null: false
    t.string   "shared_with"
    t.string   "tags"
    t.text     "body"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "posts", ["user_id"], name: "index_posts_on_user_id", using: :btree

  create_table "securities", force: :cascade do |t|
    t.string   "symbol",            null: false
    t.string   "name"
    t.string   "website"
    t.string   "image"
    t.string   "twitter_widget_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "securities", ["symbol"], name: "index_securities_on_symbol", unique: true, using: :btree

  create_table "security_list_items", force: :cascade do |t|
    t.integer  "security_list_id", null: false
    t.integer  "security_id",      null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "security_list_items", ["security_id"], name: "index_security_list_items_on_security_id", using: :btree
  add_index "security_list_items", ["security_list_id"], name: "index_security_list_items_on_security_list_id", using: :btree

  create_table "security_lists", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "symbol"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  add_foreign_key "posts", "users"
  add_foreign_key "security_list_items", "securities"
  add_foreign_key "security_list_items", "security_lists"
end
