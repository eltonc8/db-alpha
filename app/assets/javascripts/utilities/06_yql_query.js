Backbone.YqlQuery = Backbone.Model.extend({
  rootUrl: "https://query.yahooapis.com/v1/public/yql?format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  time: DbAlpha.time,

  url: function () {
    if (this.get("query")) {
      return this.rootUrl + "&q=" + encodeURIComponent(this.get("query"));
    }
  },

  initialize: function (options) {
    if (options.query) { this.set({"query": options.query}); }
  },

  parse: function (response) {
    return response.query;
  },

  updateBegin: function () {
    this._idle = false;
    this._update();
  },

  updateEnd: function () {
    this._idle = true;
  },

  _update: function () {
    this.fetch();
    if(this._idle) return;

    setTimeout(function () {
        this._update();
      }.bind(this), this._updateDownTime()
    );
  },

  _updateDownTime: function () {
    if (this.time.ops.nextClose && this.time.ops.nextClose > Date.now()) {
      return 1000 + this._baseCooldown();
    } else if (this.time.ops.nextOpen && this.time.ops.nextOpen > Date.now()) {
      return this.time.ops.nextOpen - Date.now();
    } else {
      this.time.updateOps();
      return 500;
    }
  },
});

Backbone.StockQuery = Backbone.YqlQuery.extend({
  queryRoot: 'SELECT*FROM yahoo.finance.quotes WHERE symbol="#"',

  initialize: function (options) {
    if (options && options.security) { this.security = options.security; }
    this.listenTo(this.security, "sync", this.updateQuery);
    this.updateQuery();
  },

  updateQuery: function () {
    this.set({
      query: this.queryRoot.replace(/#/, this.security.get("symbol"))
    });
  },

  _baseCooldown: function () {
    return Math.random() * 2000;
  },
});

Backbone.StocksQuery = Backbone.YqlQuery.extend({
  queryRoot: 'SELECT Symbol,Change,PercentChange,LastTradePriceOnly FROM yahoo.finance.quotes WHERE symbol in("#")',

  initialize: function (options) {
    if (options && options.collection) { this.collection = options.collection; }
    this.listenTo(this.collection, "sync sort", this.updateQuery);
    this.updateQuery();
  },

  updateQuery: function () {
    this.set({
      query: this.queryRoot.replace(/#/, this.collection.getSymbols().join('","').toUpperCase())
    });
  },
});
