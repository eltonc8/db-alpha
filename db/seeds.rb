# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "eltonchan", email: "eltonchan@cal.berkeley.edu", password: "development123")
User.create!(username: "guest_login", email: "guest_login@dbalpha.info", password: "GuestPassword")

Security.create!(symbol: "aapl", twitter_widget_id: 631601971376447488)
Security.create!(symbol: "spy", twitter_widget_id: 634758732908490754)
Security.create!(symbol: "goog", twitter_widget_id: 634761785019625472)
Security.create!(symbol: "fb", twitter_widget_id: 634762188230684672)

Post.create!(user_id: 2, title: "S&P 500 falls to support level", shared_with: "", tags: "SPY",  body:"\N  The S&P500 index falls below 200dmv today.\r\n\r\n![aug 20](https://dwq4do82y8xi7.cloudfront.net/x/fv3fezKr/)\r\n\r\n2040 appears to be a support level in the past. **Will it break below this support level in the short term?! **Fear was all over the market today.\r\n\r\nIf I had capital aiming for a long term entry, I may consider this a good time.",  created_at:  "2015-08-20 20:50:46.798332")
Post.create!(user_id: 2, title: "S&P 500 fell through 2000. at another support level 1970", shared_with: "", tags: "SPY", body:  "\N  But perhaps even that will not hold. aim for 1880?\r\n\r\n![1880 target](https://dwq4do82y8xi7.cloudfront.net/x/3n2cHbAY/)", created_at:  "2015-08-21 20:43:17.577462")

SecurityList.create!(name: "Dow Jones Industrial Average", symbol: "DJIA",
  securities: ["AAPL", "AXP", "BA", "CAT", "CSCO", "CVX", "DD", "DIS", "GE", "GS", "HD", "IBM", "INTC", "JNJ", "JPM", "KO", "MCD", "MMM", "MRK", "MSFT", "NKE", "PFE", "PG", "TRV", "UNH", "UTX", "V", "VZ", "WMT", "XOM"])
