DbAlpha.Views.MarketBoardItem = Backbone.View.extend({
  template: JST["market/board_list_item"],
  tagName: "li",
  className: "board-item",

  initialize: function () {
    this.listenTo( this.model, "sync", this.render );
    this.listenTo( this.model.quotes(), "sync", this.update );
    this.render();
  },

  render: function () {
    var content = this.template({model: this.model});
    this.$el.html( content );
    this.update();
    return this;
  },

  update: function () {
    if (!this.model.quotes().get("results")) return;
    var quote = this.model.quotes().get("results").quote;
    debugger
    this.$("div.percent-change").html( quote.PercentChange );
    this.$("div.change").html( quote.Change );
    this.$("div.last-trade").html( quote.LastTradePriceOnly );
  },

  _triggerDefault: function () {
    this.$el.removeClass("red").removeClass("green");
  },

  _triggerGreen: function () {
    this.$el.addClass("green");
    setTimeout(this._triggerDefault.bind(this), 200);
  },

  _triggerRed: function () {
    this.$el.addClass("red");
    setTimeout(this._triggerDefault.bind(this), 200);
  },
});
