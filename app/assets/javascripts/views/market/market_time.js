DbAlpha.Views.MarketTime = Backbone.View.extend({
  template: JST['market/market_time'],
  ops: {
    eastTZ: "(EDT)",
    localTZ: new Date().toTimeString().replace(/.*(\(.*\)).*/, "$1"),
    eastLocalOffset: new Date().getTimezoneOffset() - 4 * 60, // mins to be added to get wallTime
  },

  initialize: function () {
    this.interval = setInterval(this.render.bind(this), 1000);
    this.setMarketTimes();
  },

  render: function () {
    this.updateOps();
    var content = this.template( this.ops );
    this.$el.html( content );

    return this;
  },

  setMarketTimes: function () {
    if (DbAlpha.isMarketOpen()) {
      this.ops.nextClose = DbAlpha.nextMarketClose();
      this.ops.nextOpen = 0;
    } else {
      this.ops.nextClose = 0;
      this.ops.nextOpen = DbAlpha.nextMarketOpen();
    }
  },

  updateOps: function () {
    var time = new Date(), ops = this.ops;
    if (time > (ops.nextOpen || ops.nextClose)) this.setMarketTimes();
    var timeDiff = Math.floor( ((ops.nextOpen || ops.nextClose) - time) / 1000 );
    var s = timeDiff % 60;
    var m = Math.floor(timeDiff / 60 % 60);
    var h = Math.floor(timeDiff / 3600 % 24);
    var d = Math.floor(timeDiff / 86400);
    if (d) {
      ops.countdown = d + " day" + ( d > 1 ? "s " : " ")
                    + (h > 1 ? h + " hour" : "") + (h > 2 ? "s" : "");
    } else {
      ops.countdown = (h ? h + ":" : "") + ("00" + m).slice(-2) + ":" + ("00" + s).slice(-2);
    }

    // var timeString = time.toTimeString()
    ops.localTime = time.toLocaleTimeString();
    if ( ops.eastLocalOffset ) {
      time.setTime( time.getTime() + ops.eastLocalOffset * 60000) // ms/minute
      ops.eastTime = time.toLocaleTimeString();
    }
    if ( time.getSeconds() % 2) {
      ops.localTime = ops.localTime.replace(/:/g, " ");
      if (ops.eastTime) ops.eastTime = ops.eastTime.replace(/:/g, " ");
    }
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    clearInterval(this.interval);
  }
})
