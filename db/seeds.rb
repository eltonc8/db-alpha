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

SecurityList.create!(name: "SPDR Materials Select Sector", symbol: "XLB", securities:
  ["DOW","DD","MON","LYB","PX","APD","ECL","PPG","SHW","IP","SIAL","WRK","VMC","NUE","AA","CF","FCX","MOS","MLM","SEE","EMN","BLL","NEM","IFF","ARG","AVY","FMC","OI"])

SecurityList.create!(name: "SPDR Energy Select Sector", symbol: "XLE", securities:
  ["XOM","CVX","SLB","EOG","KMI","OXY","COP","WMB","PSX","VLO","PXD","APC","HAL","TSO","BHI","SE","MPC","COG","CAM","NOV","NBL","APA",
   "DVN","HES","FTI","MRO","EQT","XEC","RRC","SWN","OKE","CPGX","MUR","CHK","NFX","HP","RIG","CNX","ESV","DO"])

SecurityList.create!(name: "SPDR Financial Select Sector", symbol: "XLF", securities:
  ["WFC","BRKB","JPM","BAC","C","AIG","GS","USB","AXP","SPG","MET","MS","PNC","BK","COF","BLK","AMT","PRU","SCHW","ACE","TRV","CME","PSA","STT","MMC","BBT","CB","CCI","EQR","ICE","MHFI","AON","AFL","ALL","DFS","HCN",
    "AVB","STI","AMP","PLD","HIG","TROW","MCO","VTR","BXP","HCP","EQIX","PGR","FITB","MTB","GGP","VNO","NTRS","BEN","WY","IVZ","ESS","PFG","HST","LNC","RF","KEY","XL","L","SLG","O","MAC","AMG","KIM","CBG","HBAN","UNM",
    "ETFC","CINF","CMA","TMK","PCL","LUK","NDAQ","ZION","AIV","IRM","AIZ","NAVI","PBCT","HCBK","LM","GNW"])

SecurityList.create!(name: "SPDR Industrial Select Sector", symbol: "XLI", securities:
  ["GE","MMM","BA","UNP","HON","UTX","UPS","DHR","LMT","CAT","GD","FDX","DAL","CMI","NOC","RTN","CSX","EMR","ETN","PCP","ITW","DE","AAL","NSC","LUV","PCAR","WM","UAL","PH","ROK","NLSN","GWW","ROP","EFX","SWK","TYC",
    "IR","COL","TXT","AME","DOV","SRCL","MAS","FAST","KSU","RSG","CHRW","RHI","CTAS","PNR","FLR","EXPD","SNA","LLL","R","JBHT","URI","XYL","FLS","ALLE","ADT","PWR","JEC","PBI","DNB","JOY"])

SecurityList.create!(name: "SPDR Technology Select Sector", symbol: "XLK", securities:
  ["AAPL","MSFT","T","FB","GOOGL","VZ","GOOG","V","IBM","CSCO","ORCL","INTC","MA","QCOM","ACN","TXN","EMC","CRM","HPQ","CTSH","ADBE","ADP","PYPL","AVGO","BRCM","EBAY","YHOO","INTU","TEL","GLW","EA","FISV","FIS","AMAT",
    "ADI","MU","WDC","SWKS","APH","ALTR","PAYX","ADS","STX","CTL","ATVI","AKAM","RHT","SYMC","LVLT","SNDK","NVDA","CTXS","XLNX","LRCX","XRX","ADSK","MSI","NTAP","LLTC","MCHP","WU","HRS","JNPR","CA","KLAC","CSC","TSS",
    "FFIV","VRSN","QRVO","FTR","TDC","FLIR","FSLR"])

SecurityList.create!(name: "SPDR Consumer Staples Select Sector", symbol: "XLP", securities:
  ["PG","KO","PM","CVS","WMT","MO","WBA","PEP","MDLZ","COST","CL","KHC","KR","KMB","RAI","GIS","STZ","ADM","SYY","MNST","CAG","EL","K","BFB","CLX","DPS","TAP","TSN","MJN","HSY","SJM","WFM","MKC","CCE","HRL","CPB","GMCR"])

SecurityList.create!(name: "SPDR Utilities Select Sector", symbol: "XLU", securities:
  ["DUK","NEE","D","SO","AEP","EXC","PCG","SRE","PPL","PEG","EIX","ED","XEL","WEC","ES","DTE","FE","ETR","AEE","CMS","CNP","AES","SCG","GAS","PNW","TE","NRG","POM","NI"])

SecurityList.create!(name: "SPDR Health Care Select Sector", symbol: "XLV", securities:
  ["JNJ","PFE","GILD","MRK","AGN","UNH","AMGN","BMY","ABBV","MDT","CELG","LLY","BIIB","ESRX","ABT","TMO","MCK","AET","ANTM","REGN","CI","ALXN","VRTX","SYK","HUM","BDX","CAH","PRGO","HCA","BSX","ABC","ZTS","BXLT","MYL",
    "BAX","STJ","CERN","ISRG","ZBH","ENDP","BCR","EW","DVA","UHS","A","LH","HSIC","WAT","DGX","MNK","VAR","XRAY","PKI","THC","PDCO"])

SecurityList.create!(name: "SPDR Consumer Discretionary Select Sector", symbol: "XLY", securities:
["AMZN","DIS","HD","CMCSA","MCD","SBUX","NKE","PCLN","LOW","F","TWX","TWC","TGT","TJX","FOXA","NFLX","GM","YUM","JCI","ORLY","VFC","CCL","AZO","DLPH","LB","CMG","DG","ROST","CBS","M","UA","OMC","VIAB","RCL","DLTR","MAR",
  "WHR","GPC","AAP","KMX","MHK","HOT","EXPE","HBI","TSCO","HOG","NWL","BBY","SIG","BBBY","DHI","JWN","KSS","BWA","HRB","PVH","WYN","LEN","TIF","HAS","KORS","SPLS","DRI","GPS","IPG","GT","COH","MAT","TRIP","HAR","RL","PHM",
  "DISCK","NWSA","CVC","LEG","WYNN","TGNA","SNI","GME","AN","GRMN","DISCA","URBN","FOSL","T"])
