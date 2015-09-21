DbAlpha.Views.SecurityFundamentals = Backbone.CompositeView.extend({
  className: "fundamental-list",
  fundamentals: {
    LastTradePriceOnly: "last trade",
    Change: "change",
    ChangeinPercent: "%change",
    YearLow: "52wk low",
    YearHigh: "52wk high",
    EarningsShare: "earnings/share",
    PERatio: "P/E",
    PEGRatio: "PEG",
    DividendYield: "yield",
  },

  initialize: function () {
    this.model.quotes().updateBegin();
    this.listenTo(this.model.quotes(), "sync", this._updateFundamental);
    _.each(this.fundamentals, this._addFundamental.bind(this));
  },

  remove: function () {
    this.model.quotes().updateEnd();
    Backbone.CompositeView.prototype.remove.call(this);
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
    var quote = this.model.quotes().get("results").quote;
    this.eachSubview( function (fundamentalItem) {
      fundamentalItem.update(quote);
    });
  },
});
