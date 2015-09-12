// 9am EDT = 13; EST = 14
DbAlpha.opening = 13;

DbAlpha.isTradingDay = function (time) {
  if (!time) time = new Date();

  if (time.getUTCDay() % 6) return true;
  //TODO implementation of holidays
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
