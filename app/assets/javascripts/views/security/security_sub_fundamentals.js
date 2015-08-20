DbAlpha.Views.SecurityFundamentals = Backbone.CompositeView.extend({
  className: "fundamental-list",
  fundamentals: {
    LastTradePriceOnly: "last trade",
    Change: "change",
    YearLow: "52wk low",
    YearHigh: "52wk high",
    EarningsShare: "earnings/share",
    PERatio: "P/E",
    PEGRatio: "PEG",
    DividendYield: "yield",
  },

  initialize: function () {
    this._updateQuote();
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

  _updateQuote: function () {
    this.model.quotes().fetch();
    setTimeout(function () {
        this._updateQuote();
      }.bind(this), this._updateQuoteTimer()
    );
  },

  _updateQuoteTimer: function () {
    var time = new Date();
    if ( 12 < time.getUTCHours() && time.getUTCHours() < 20) {
      return 2000 + 8000 * Math.random();
    } else {
      return 3600000;
    }
  },

  _updateFundamental: function () {
    var quote = this.model.quotes().attributes.results.quote;
    this.eachSubview( function (fundamentalItem) {
      fundamentalItem.update(quote);
    });
  },
});
