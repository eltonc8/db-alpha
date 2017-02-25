require "./lists/dow.rb"
require "./lists/nasdaq.rb"
require "./lists/sp500.rb"

User.create!(username: "eltonchan", email: "eltonchan@cal.berkeley.edu", password: "development123")
User.create!(username: "guest_login", email: "guest_login@dbalpha.info", password: "GuestPassword")

Security.create!(symbol: "aapl", twitter_widget_id: 631601971376447488)
Security.create!(symbol: "spy", twitter_widget_id: 634758732908490754)
Security.create!(symbol: "goog", twitter_widget_id: 634761785019625472)
Security.create!(symbol: "fb", twitter_widget_id: 634762188230684672)
Security.create!(symbol: "grpn", twitter_widget_id: 668519773295280128)

Post.create!(user_id: 2, title: "S&P 500 falls to support level", shared_with: "", tags: "SPY",  body:"\N  The S&P500 index falls below 200dmv today.\r\n\r\n![aug 20](https://dwq4do82y8xi7.cloudfront.net/x/fv3fezKr/)\r\n\r\n2040 appears to be a support level in the past. **Will it break below this support level in the short term?! **Fear was all over the market today.\r\n\r\nIf I had capital aiming for a long term entry, I may consider this a good time.",  created_at:  "2015-08-20 20:50:46.798332")
Post.create!(user_id: 2, title: "S&P 500 fell through 2000. at another support level 1970", shared_with: "", tags: "SPY", body:  "\N  But perhaps even that will not hold. aim for 1880?\r\n\r\n![1880 target](https://dwq4do82y8xi7.cloudfront.net/x/3n2cHbAY/)", created_at:  "2015-08-21 20:43:17.577462")


SecurityList.create!(name: "Dow Jones Industrial Average", symbol: "DJIA", securities: DOW)

SecurityList.create!(name: "NASDAQ-100", symbol: "IXNDX", securities: NASDAQ100)

SecurityList.create!(name: "Standard & Poor 500", symbol: "SPX", securities: SP500)

SecurityList.create!(name: "Sectors of the S&P 500", symbol: "SPDR", securities:
  ["SPY", "XLB", "XLE", "XLF", "XLI", "XLK", "XLP", "XLU", "XLV", "XLY"])

Security.find_by_symbol("XLB").update(name: "SPDR Select Sector Materials", image: "http://res.cloudinary.com/dwlxp9sf7/image/upload/v1442617799/SPDR/XLB.png")
Security.find_by_symbol("XLE").update(name: "SPDR Select Sector Energy", image: "http://res.cloudinary.com/dwlxp9sf7/image/upload/v1442617799/SPDR/XLE.png")
Security.find_by_symbol("XLF").update(name: "SPDR Select Sector Financials", image: "http://res.cloudinary.com/dwlxp9sf7/image/upload/v1442617799/SPDR/XLF.png")
Security.find_by_symbol("XLI").update(name: "SPDR Select Sector Industrials", image: "http://res.cloudinary.com/dwlxp9sf7/image/upload/v1442617799/SPDR/XLI.png")
Security.find_by_symbol("XLK").update(name: "SPDR Select Sector Technology", image: "http://res.cloudinary.com/dwlxp9sf7/image/upload/v1442617799/SPDR/XLK.png")
Security.find_by_symbol("XLP").update(name: "SPDR Select Sector Consumer Staples", image: "http://res.cloudinary.com/dwlxp9sf7/image/upload/v1442617799/SPDR/XLP.png")
Security.find_by_symbol("XLU").update(name: "SPDR Select Sector Utilities", image: "http://res.cloudinary.com/dwlxp9sf7/image/upload/v1442617799/SPDR/XLU.png")
Security.find_by_symbol("XLV").update(name: "SPDR Select Sector Health Care", image: "http://res.cloudinary.com/dwlxp9sf7/image/upload/v1442617799/SPDR/XLV.png")
Security.find_by_symbol("XLY").update(name: "SPDR Select Sector Consumer Discretionary", image: "http://res.cloudinary.com/dwlxp9sf7/image/upload/v1442617799/SPDR/XLY.png")

SecurityList.create!(name: "SPDR Consumer Discretionary Select Sector", symbol: "XLY", securities: XLY)
SecurityList.create!(name: "SPDR Consumer Staples Select Sector", symbol: "XLP", securities: XLP)
SecurityList.create!(name: "SPDR Energy Select Sector", symbol: "XLE", securities: XLE)
SecurityList.create!(name: "SPDR Financial Select Sector", symbol: "XLF", securities: XLF)
SecurityList.create!(name: "SPDR Health Care Select Sector", symbol: "XLV", securities: XLV)
SecurityList.create!(name: "SPDR Industrial Select Sector", symbol: "XLI", securities: XLI)
SecurityList.create!(name: "SPDR Materials Select Sector", symbol: "XLB", securities: XLB)
SecurityList.create!(name: "SPDR Technology Select Sector", symbol: "XLK", securities: XLK)
SecurityList.create!(name: "SPDR Utilities Select Sector", symbol: "XLU", securities: XLU)
