DbAlpha.Views.MarketTime = Backbone.View.extend({
  template: JST['market/market_time'],

  initialize: function () {
    this.interval = setInterval(this.render.bind(this), 1000);
  },

  render: function () {
    var time = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    if (this.tick = !this.tick) time = time.replace(/:/g, " ");
    var content = this.template({
      currentTime: time
    });
    this.$el.html( content );
    return this;
  },

  remove: function () {
    debugger
    Backbone.View.prototype.remove.call(this);
    this.clearInterval(this.interval);
  }
})
