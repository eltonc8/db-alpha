DbAlpha.Views.SecurityFundamentals = Backbone.CompositeView.extend({
  className: "",
  fundamentals: {
    LastTradePriceOnly: "last trade",
    Change: "change",
    YearRange: "52wk range",
    EarningsShare: "e/share",
    PERatio: "P/E",
    PEGRatio: "PEG",
    DividendYield: "yield",
  },

  initialize: function () {
    this.model.quotes().fetch();
    this.listenTo(this.model.quotes(), "sync", this._updateFundamental);
    _.each(this.fundamentals, this._addFundamental.bind(this));
  },

  render: function () {
    this.$el.html( $("<ul>") );
    this.attachSubviews();
    return this;
  },

  _addFundamental: function (label, key) {
    this.addSubview("ul", new DbAlpha.Views.SecurityFundamentalItem({
      label: label,
      key: key
    }));
  },

  _updateFundamental: function () {
    var quote = this.model.quotes().attributes.results.quote;
    this.eachSubview( function (fundamentalItem) {
      fundamentalItem.update(quote);
    });
  },
});
