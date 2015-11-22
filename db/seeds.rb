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
Security.create!(symbol: "grpn", twitter_widget_id: 668519773295280128)

Post.create!(user_id: 2, title: "S&P 500 falls to support level", shared_with: "", tags: "SPY",  body:"\N  The S&P500 index falls below 200dmv today.\r\n\r\n![aug 20](https://dwq4do82y8xi7.cloudfront.net/x/fv3fezKr/)\r\n\r\n2040 appears to be a support level in the past. **Will it break below this support level in the short term?! **Fear was all over the market today.\r\n\r\nIf I had capital aiming for a long term entry, I may consider this a good time.",  created_at:  "2015-08-20 20:50:46.798332")
Post.create!(user_id: 2, title: "S&P 500 fell through 2000. at another support level 1970", shared_with: "", tags: "SPY", body:  "\N  But perhaps even that will not hold. aim for 1880?\r\n\r\n![1880 target](https://dwq4do82y8xi7.cloudfront.net/x/3n2cHbAY/)", created_at:  "2015-08-21 20:43:17.577462")

SecurityList.create!(name: "Dow Jones Industrial Average", symbol: "DJIA", securities: [
  "AAPL", "AXP", "BA", "CAT", "CSCO", "CVX", "DD", "DIS", "GE", "GS",
  "HD", "IBM", "INTC", "JNJ", "JPM", "KO", "MCD", "MMM", "MRK", "MSFT",
  "NKE", "PFE", "PG", "TRV", "UNH", "UTX", "V", "VZ", "WMT", "XOM"])

SecurityList.create!(name: "NASDAQ-100", symbol: "IXNDX", securities: [
  "ATVI", "ADBE", "AKAM", "ALXN", "ALTR", "AMZN", "AAL", "AMGN", "ADI", "AAPL",
  "AMAT", "ADSK", "ADP", "AVGO", "BIDU", "BBBY", "BIIB", "BMRN", "BRCM", "CHRW",
  "CA", "CELG", "CERN", "CHTR", "CHKP", "CSCO", "CTXS", "CTSH", "CMCSA", "CMCSK",
  "COST", "DISCA", "DISCK", "DISH", "DLTR", "EBAY", "EA", "EXPD", "ESRX", "FB",
  "FAST", "FISV", "GRMN", "GILD", "GOOG", "GOOGL", "HSIC", "ILMN", "INTC", "INTU",
  "ISRG", "JD", "GMCR", "KLAC", "LRCX", "LBTYA", "LBTYK", "LILA", "LILAK", "LVNTA",
  "QVCA", "LMCA", "LMCK", "LLTC", "MAR", "MAT", "MU", "MSFT", "MDLZ", "MNST", "MYL",
  "NTAP", "NFLX", "NVDA", "NXPI", "ORLY", "PCAR", "PAYX", "QCOM", "REGN", "ROST", "SNDK",
  "SBAC", "STX", "SIRI", "SWKS", "SPLS", "SBUX", "SRCL", "SYMC", "TSLA", "TXN", "KHC",
  "PCLN", "TSCO", "TRIP", "FOX", "FOXA", "VRSK", "VRTX", "VIAB", "VIP", "VOD", "WBA",
  "WDC", "WFM", "WYNN", "XLNX", "YHOO"])

SecurityList.create!(name: "Standard & Poor 500", symbol: "SPX", securities: [
  "A", "AA", "AAL", "AAP", "AAPL", "ABBV", "ABC", "ABT", "ACE", "ACN",
  "ADBE", "ADI", "ADM", "ADP", "ADS", "ADSK", "ADT", "AEE", "AEP", "AES",
  "AET", "AFL", "AGN", "AIG", "AIV", "AIZ", "AKAM", "ALL", "ALLE", "ALTR",
  "ALXN", "AMAT", "AME", "AMG", "AMGN", "AMP", "AMT", "AMZN", "AN", "ANTM",
  "AON", "APA", "APC", "APD", "APH", "ARG", "ATVI", "AVB", "AVGO", "AVY",
  "AXP", "AZO", "BA", "BAC", "BAX", "BBBY", "BBT", "BBY", "BCR", "BDX",
  "BEN", "BFB", "BHI", "BIIB", "BK", "BLK", "BLL", "BMY", "BRCM", "BRKB",
  "BSX", "BWA", "BXLT", "BXP", "C", "CA", "CAG", "CAH", "CAM", "CAT",
  "CB", "CBG", "CBS", "CCE", "CCI", "CCL", "CELG", "CERN", "CF", "CHK",
  "CHRW", "CI", "CINF", "CL", "CLX", "CMA", "CMCSA", "CME", "CMG", "CMI",
  "CMS", "CNP", "CNX", "COF", "COG", "COH", "COL", "COP", "COST", "CPB",
  "CPGX", "CRM", "CSC", "CSCO", "CSX", "CTAS", "CTL", "CTSH", "CTXS", "CVC",
  "CVS", "CVX", "D", "DAL", "DD", "DE", "DFS", "DG", "DGX", "DHI",
  "DHR", "DIS", "DISCA", "DISCK", "DLPH", "DLTR", "DNB", "DO", "DOV", "DOW",
  "DPS", "DRI", "DTE", "DUK", "DVA", "DVN", "EA", "EBAY", "ECL", "ED",
  "EFX", "EIX", "EL", "EMC", "EMN", "EMR", "ENDP", "EOG", "EQIX", "EQR",
  "EQT", "ES", "ESRX", "ESS", "ESV", "ETFC", "ETN", "ETR", "EW", "EXC",
  "EXPD", "EXPE", "F", "FAST", "FB", "FCX", "FDX", "FE", "FFIV", "FIS",
  "FISV", "FITB", "FLIR", "FLR", "FLS", "FMC", "FOSL", "FOXA", "FSLR", "FTI",
  "FTR", "GAS", "GD", "GE", "GGP", "GILD", "GIS", "GLW", "GM", "GMCR",
  "GME", "GNW", "GOOG", "GOOGL", "GPC", "GPS", "GRMN", "GS", "GT", "GWW",
  "HAL", "HAR", "HAS", "HBAN", "HBI", "HCA", "HCBK", "HCN", "HCP", "HD",
  "HES", "HIG", "HOG", "HON", "HOT", "HP", "HPQ", "HRB", "HRL", "HRS",
  "HSIC", "HST", "HSY", "HUM", "IBM", "ICE", "IFF", "INTC", "INTU", "IP",
  "IPG", "IR", "IRM", "ISRG", "ITW", "IVZ", "JBHT", "JCI", "JEC", "JNJ",
  "JNPR", "JOY", "JPM", "JWN", "K", "KEY", "KHC", "KIM", "KLAC", "KMB",
  "KMI", "KMX", "KO", "KORS", "KR", "KSS", "KSU", "L", "LB", "LEG",
  "LEN", "LH", "LLL", "LLTC", "LLY", "LM", "LMT", "LNC", "LOW", "LRCX",
  "LUK", "LUV", "LVLT", "LYB", "M", "MA", "MAC", "MAR", "MAS", "MAT",
  "MCD", "MCHP", "MCK", "MCO", "MDLZ", "MDT", "MET", "MHFI", "MHK", "MJN",
  "MKC", "MLM", "MMC", "MMM", "MNK", "MNST", "MO", "MON", "MOS", "MPC",
  "MRK", "MRO", "MS", "MSFT", "MSI", "MTB", "MU", "MUR", "MYL", "NAVI",
  "NBL", "NDAQ", "NEE", "NEM", "NFLX", "NFNFNI", "NKE", "NLSN", "NOC", "NOV",
  "NRG", "NSC", "NTAP", "NTRS", "NUE", "NVDA", "NWL", "NWSA", "O", "OI",
  "OKE", "OMC", "ORCL", "ORLY", "OXY", "PAYX", "PBCT", "PBI", "PCAR", "PCG",
  "PCL", "PCLN", "PCP", "PDCO", "PEG", "PEP", "PFE", "PFG", "PG", "PGR",
  "PH", "PHM", "PKI", "PLD", "PM", "PNC", "PNR", "PNW", "POM", "PPG",
  "PPL", "PRGO", "PRU", "PSA", "PSX", "PVH", "PWR", "PX", "PXD", "PYPL",
  "QCOM", "QRVO", "R", "RAI", "RCL", "REGN", "RF", "RHI", "RHT", "RIG",
  "RL", "ROK", "ROP", "ROST", "RRC", "RRR", "RTN", "SBUX", "SCG", "SCHW",
  "SE", "SEE", "SHW", "SIAL", "SIG", "SJM", "SLB", "SLG", "SNA", "SNDK",
  "SNI", "SO", "SPG", "SPLS", "SRCL", "SRE", "STI", "STJ", "STT", "STX",
  "STZ", "SWK", "SWKS", "SWN", "SYK", "SYMC", "SYY", "T", "TAP", "TDC",
  "TE", "TEL", "TGNA", "TGT", "THC", "TIF", "TJX", "TMK", "TMO", "TRIP",
  "TROW", "TRV", "TSCO", "TSN", "TSO", "TSS", "TWC", "TWX", "TXN", "TXT",
  "TYC", "UA", "UAL", "UHS", "UNH", "UNM", "UNP", "UPS", "URBN", "URI",
  "USB", "UUU", "V", "VAR", "VFC", "VIAB", "VLO", "VMC", "VNO", "VRSN",
  "VRTV", "VTR", "VZ", "WAT", "WBA", "WDC", "WEC", "WFC", "WFM", "WHR",
  "WM", "WMB", "WMT", "WRK", "WU", "WY", "WYN", "WYNN", "XEC", "XEL",
  "XL", "XLNX", "XOM", "XRAY", "XRX", "XYL", "YHOO", "YUM", "ZBH", "ZION",
  "ZTS"])

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
