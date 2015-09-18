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
  "BEN", "BF.B", "BHI", "BIIB", "BK", "BLK", "BLL", "BMY", "BRCM", "BRK.B",
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
