DbAlpha.isMarketOpen = function (time) {
  if (!time) time = new Date();
  var close = 20 // 4pm EDT = 20; 4pm EST = 21
  return close > time.getUTCHours() && time.getUTCHours() > (close - 6 ) ||
         (close - 7 == time.getUTCHours() && time.getMinutes() >= 30);
};

DbAlpha.nextMarketOpen = function () {
  var time = new Date();
  time.setUTCHours(13);
  time.setMinutes(30);
  time.setSeconds(0);
  var dayDelay = (time.getUTCDay() === 5 && 3) || (time.getUTCDay() === 6 && 2) || 1;
  time.setDate(time.getDate() + dayDelay);
  return time;
};
