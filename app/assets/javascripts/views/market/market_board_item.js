DbAlpha.Views.MarketBoardItem = Backbone.View.extend({
  template: JST["market/board_list_item"],
  tagName: "li",
  className: "board-list-item",

  initialize: function () {
    this._percent = 0;
    this.listenTo( this.model, "sync change", this.render );
    this.listenTo( this.model.quotes(), "sync change", this._update );
    this.render();
  },

  render: function () {
    var content = this.template({model: this.model});
    this.$el.data("symbol", this.model.escape("symbol") );
    this.$el.html( content );
    this.update();
    return this;
  },

  update: function () {
    var results = this.model.quotes().get("results");
    quote = (results && results.quote) || {};
    this.$("div.change").html( _.escape(quote.Change) );
    this.$("div.last-trade").html( _.escape(quote.LastTradePriceOnly) );

    var percent = +/-?\d*\.\d*/.exec( quote.PercentChange );
    percent = Math.round( percent * 100) / 100;
    if      (this._percent < percent) { this._triggerGreen(); }
    else if (this._percent > percent) { this._triggerRed(); }

    var g = Math.round( Math.atan(percent) * this._factor + 127.5);
    var r = 255 - g;
    var b = Math.min(r,g);
    var colors = [r,g,b];
    var gradient = this._gradient.replace(/#{}/g, colors.join(","));
    this.$("div.percent-change").css("background", gradient);
    this.$("div.percent-change").html( percent + "%" );
    this._percent = percent;
  },

  _factor: 255 / Math.PI,
  _gradient: "linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(#{},1) 20%,rgba(#{},1) 80%,rgba(0,0,0,0) 100%)",

  _triggerDefault: function () {
    this.$el.removeClass("red").removeClass("green");
  },

  _triggerGreen: function () {
    this.$el.addClass("green");
    setTimeout(this._triggerDefault.bind(this), 1000);
  },

  _triggerRed: function () {
    this.$el.addClass("red");
    setTimeout(this._triggerDefault.bind(this), 1000);
  },

  _update: function () {
    setTimeout(this.update.bind(this), Math.random() * (8000));
  }
});
