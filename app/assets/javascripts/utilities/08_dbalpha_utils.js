// 9am EDT = 13; EST = 14
DbAlpha.opening = 13;

DbAlpha.isTradingDay = function (time) {
  if (!time) time = new Date();
  if (!(time.getUTCDay() % 6) ) return false; //if Sunday or Monday

  //HOLIDAYS, 2015
  var d = time.getUTCDay(), m = time.getUTCMonth();
  if ( m === 0 ) {         //January - New Year's && MLK's
    if ( d === 1 || d === 19 ) return false;
  } else if ( m === 1 ) {  //February - President's Day
    if ( d === 16 ) return false;
  } else if ( m === 3 ) {  //April - Good Friday
    if ( d === 3 ) return false;
  } else if ( m === 4 ) {  //May - Memorial Day
    if ( d === 25 ) return false;
  } else if ( m === 6 ) {  //July - Independence Day
    if ( d === 3 ) return false;
  } else if ( m === 8 ) {  //September - Labor Day
    if ( d === 7 ) return false;
  } else if ( m === 10 ) { //November - Thanksgiving
    if ( d === 26 ) return false;
  } else if ( m === 11 ) { //December - Christmas
    if ( d === 25 ) return false;
  }

  return true;
};

DbAlpha.isMarketOpen = function (time) {
  if (!time) time = new Date();
  if (!DbAlpha.isTradingDay(time)) return;
  var close = DbAlpha.opening + 7;

  if (close > time.getUTCHours() && time.getUTCHours() > (DbAlpha.opening) ||
  (DbAlpha.opening == time.getUTCHours() && time.getMinutes() >= 30)) {
    return time;
  }
};

DbAlpha.nextMarketOpen = function (time) {
  if (!time) time = new Date();
  time.setUTCHours(13);
  time.setMinutes(30);
  time.setSeconds(0);
  while (time < Date.now() || !DbAlpha.isMarketOpen(time)) {
    time.setUTCDate(time.getUTCDate() + 1);
  }

  return time;
};

DbAlpha.nextMarketClose = function (time) {
  time = DbAlpha.isMarketOpen(time) || DbAlpha.nextMarketOpen(time);
  time.setUTCHours(DbAlpha.opening + 7);
  time.setMinutes(0);
  time.setSeconds(0);

  return time;
}
