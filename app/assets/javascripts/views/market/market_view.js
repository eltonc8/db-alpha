DbAlpha.Views.Markets = Backbone.CompositeView.extend({
  className: "market-view",
  template: JST["market/market_board"],

  addViews: function () {
    this.addSubview('.top',
      new DbAlpha.Views.MarketBoard({ collection: this.collection })
    );
  },

  render: function () {
    var content = this.template();
    debugger
    this.attachSubviews();
    return this;
  }
});
