# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(email: "eltonchan@cal.berkeley.edu", password: "development123")
User.create!(email: "guest_login@dbalpha.info", password: "GuestPassword")

Security.create!(symbol: "aapl", twitter_widget_id: 631601971376447488)
Security.create!(symbol: "spy", twitter_widget_id: 634758732908490754)
Security.create!(symbol: "goog", twitter_widget_id: 634761785019625472)
Security.create!(symbol: "fb", twitter_widget_id: 634762188230684672)


Post.create!(
  user_id: 1,
  title: "First post",
  shared_with: "public",
  tags: "test,aapl",
  note: "note content. I may need to use a new class instead",
  body: "a very long string of text can go here! This body can go on for a while",
)
