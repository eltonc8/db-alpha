DbAlpha.Models.Time = Backbone.Model.extend({
  // 9am EDT = 13; EST = 14
  _opening: 13,
  ops: {
    eastTZ: this._opening == 13 ? "(EDT)" : "(EST)",
    localTZ: new Date().toTimeString().replace(/.*(\(.*\)).*/, "$1"),
    // mins to be added to get Eastern Time
    eastLocalOffset: new Date().getTimezoneOffset() - 4 * 60,
  },

  initialize: function () {
    this._setMarketTimes();
  },

  updateOps: function () {
    var time = new Date(), ops = this.ops;
    if (time > (ops.nextOpen || ops.nextClose)) this._setMarketTimes();
    var timeDiff = Math.floor( ((ops.nextOpen || ops.nextClose) - time) / 1000 );
    var s = timeDiff % 60;
    var m = Math.floor(timeDiff / 60 % 60);
    var h = Math.floor(timeDiff / 3600 % 24);
    var d = Math.floor(timeDiff / 86400);
    if (d) {
      ops.countdown = d + " day" + ( d > 1 ? "s " : " ") +
                     (h > 1 ? h + " hour" : "") + (h > 2 ? "s" : "");
    } else {
      ops.countdown = (h ? h + ":" : "") + ("00" + m).slice(-2) + ":" + ("00" + s).slice(-2);
    }

    ops.localTime = time.toLocaleTimeString();
    if ( ops.eastLocalOffset ) {
      time.setTime( time.getTime() + ops.eastLocalOffset * 60000); // ms/minute
      ops.eastTime = time.toLocaleTimeString();
    }
    if ( time.getSeconds() % 2) {
      ops.localTime = ops.localTime.replace(/:/g, " ");
      if (ops.eastTime) ops.eastTime = ops.eastTime.replace(/:/g, " ");
    }
  },

  _isTradingDay: function (time) {
    if (!time) time = new Date();

    //if Sunday or Monday
    if (!(time.getUTCDay() % 6) ) return false;

    //HOLIDAYS, 2015
    var d = time.getUTCDate(), m = time.getUTCMonth();
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
  },

  _isMarketOpen: function (time) {
    if (!time) time = new Date();
    if (!this._isTradingDay(time)) return;
    var close = this._opening + this._tradingHours(time);
    if (close > time.getUTCHours() && time.getUTCHours() > (this._opening) ||
    (this._opening == time.getUTCHours() && time.getMinutes() >= 30)) {
      return time;
    }
  },

  _nextMarketOpen: function (time) {
    if (!time) time = new Date();
    time.setUTCHours(13);
    time.setMinutes(30);
    time.setSeconds(0);
    while (time < Date.now() || !this._isMarketOpen(time)) {
      time.setUTCDate(time.getUTCDate() + 1);
    }

    return time;
  },

  _nextMarketClose: function (time) {
    time = this._isMarketOpen(time) || this._nextMarketOpen(time);
    time.setUTCHours(this._opening + this._tradingHours(time));
    time.setMinutes(0);
    time.setSeconds(0);

    return time;
  },

  _setMarketTimes: function () {
    if (this._isMarketOpen()) {
      this.ops.nextClose = this._nextMarketClose();
      this.ops.nextOpen = 0;
    } else {
      this.ops.nextClose = 0;
      this.ops.nextOpen = this._nextMarketOpen();
    }
  },

  _tradingHours: function (time) {
    if (!time) time = new Date();

    var d = time.getUTCDate(), m = time.getUTCMonth();
    if ( (m === 10 && d === 27 )
      || (m === 11 && d === 24 )) {
      return 4;
    }

    return time.getUTCDay() % 6 && 7;
  },

});

DbAlpha.time = new DbAlpha.Models.Time();
