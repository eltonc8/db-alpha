DbAlpha.Views.MarketTime = Backbone.View.extend({
  template: JST['market/market_time'],
  ops: {},

  initialize: function () {
    this.interval = setInterval(this.render.bind(this), 1000);
    this.setMarketTimes();
  },

  getCountdown: function () {
    return;
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
    ops.localTime = time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    if (ops.localTime[7] % 2) ops.localTime = ops.localTime.replace(/:/g, " ");

    if (time > (ops.nextOpen || ops.nextClose)) this.setMarketTimes();
  },

  remove: function () {
    debugger
    Backbone.View.prototype.remove.call(this);
    this.clearInterval(this.interval);
  }
})
