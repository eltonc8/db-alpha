DbAlpha.Views.MarketBoard = Backbone.CompositeView.extend({
  djia: [ "AAPL","AXP","BA","CAT","CSCO",
          "CVX","DD","DIS","GE","GS",
          "HD","IBM","INTC","JNJ","JPM",
          "KO","MCD","MMM","MRK","MSFT",
          "NKE","PFE","PG","TRV","UNH",
          "UTX","V","VZ","WMT","XOM"],
  className: "market-board",
  template: JST["market/market_board"],

  initialize: function () {
    _(this.djia).each( function (symbol) {
      this.collection.getOrFetch(symbol, {delayFetch: true}).bind(this.collection);
    }.bind(this));
    this.collection.fetch({merge: true});
    this._updateQuote();
    this.listenTo(this.collection, "add", this._addBoardItem);
    this.listenTo(this.collection, "remove", this._removeBoardItem);
    this.listenTo(this.collection.quotes(), "sync", this._distributeQuotes);
    this.collection.each(this._addBoardItem.bind(this));
    this.addSubview(".market-view.information", new DbAlpha.Views.MarketTime());
  },

  events: {
    "click li": "clickNavigate"
  },

  clickNavigate: function (event) {
    var symbol = $(event.currentTarget).data().symbol;
    Backbone.history.navigate("securities/" + symbol, {trigger: true});
  },

  render: function () {
    this.$el.html( this.template() );
    this.attachSubviews();
    return this;
  },

  _addBoardItem: function (model) {
    this.addSubview("ul", new DbAlpha.Views.MarketBoardItem({
      model: model
    }));
  },

  _removeBoardItem: function (model) {
    this.removeModelSubview("ul", model);
  },

  _updateQuote: function () {
    this.collection.quotes().fetch();
    setTimeout(function () {
        this._updateQuote();
      }.bind(this), this._updateQuoteTimer()
    );
  },

  _updateQuoteTimer: function () {
    var time = new Date();
    if ( 12 < time.getUTCHours() && time.getUTCHours() < 20) {
      return 8000 + 2000 * Math.random();
    } else {
      time.setUTCHours(13);
      time.setMinutes(29);
      var dayDelay = (time.getUTCDay() === 5 && 3) || (time.getUTCDay() === 6 && 2) || 1;
      time.setDate(time.getDate() + dayDelay);
      return time - new Date();
    }
  },

  _distributeQuotes: function () {
    var quotes = this.collection.quotes().get("results").quote;
    var idx = 0;
    this.collection.each(function (model) {
      if ( RegExp(quotes[idx].Symbol, "i").test(model.get("symbol")) ) {
        model.quotes().set("results", {quote: quotes[idx++]});
      }
    });
  },
});
