DbAlpha.Views.MarketTime = Backbone.View.extend({
  template: JST['market/market_time'],

  initialize: function () {
    this.interval = setInterval(this.render.bind(this), 1000);
  },

  render: function () {
    DbAlpha.time.updateOps();
    var content = this.template( DbAlpha.time.ops );
    this.$el.html( content );

    return this;
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    clearInterval(this.interval);
  }
});
