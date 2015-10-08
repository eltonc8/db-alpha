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
    if (this._timeout) clearTimeout(this._timeout);
    this._update();
  },

  updateEnd: function () {
    if (this._timeout) clearTimeout(this._timeout);
  },

  _fetch: function () {
    this.fetch();
  },

  _update: function () {
    this._fetch();

    this._timeout = setTimeout(function () {
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
    this.updateQuery();
  },

  updateQuery: function () {
    this.set({
      query: this.queryRoot.replace(/#/, this.security.get("symbol"))
    });
  },

  _baseCooldown: function () {
    return Math.random() * 1000;
  },
});

Backbone.StocksQuery = Backbone.YqlQuery.extend({
  queryRoot: 'SELECT Symbol,Change,PercentChange,LastTradePriceOnly FROM yahoo.finance.quotes WHERE symbol in("#")',

  initialize: function (options) {
    this.queries = [];
    this.securitiesSets = _([]);
    if (options && options.collection) { this.collection = options.collection; }
    this.listenTo(this, "sync", this._distributeQuotes);
  },

  allocateSets: function () {
    this.securitiesSets = [[0, this.collection.length]];
    var i = 0, diff, dicedSets, set;
    while (i < this.securitiesSets.length) {
      set = this.securitiesSets[i];
      dicedSets = this._allocateSetsDicer(set);
      if (dicedSets) {
        this.securitiesSets.splice(i, 1);
        this.securitiesSets = this.securitiesSets.concat(dicedSets);
      } else {
        i++;
      }
    }

    var list = this.collection;
    this.securitiesSets = _(this.securitiesSets.map(function (set) {
      return _(list.slice(set[0], set[1]));
    }));
    this.queries = this.securitiesSets.map(function (set) {
      return set.map(function (model) {
        return model.get("symbol");
      }).join('","').toUpperCase();
    });
  },

  reset: function () {
    this.updateEnd();
    this.updateBegin();
  },

  updateBegin: function () {
    this.allocateSets();
    if (this._timeout) clearTimeout(this._timeout);
    this._update();
  },

  _allocateSetsDicer: function (set) {
    var span = set[1] - set[0] + 1, pt1, pt2;
    if (span < 200) {
      // the maximum span that will not be diced: 199;
      return false;
    } else if (span >= 300 && span < 400) {
      pt1 = Math.floor(span / 3) + set[0];
      pt2 = Math.floor(span * 2 / 3) + set[0];
      return [[set[0], pt1], [pt1, pt2], [pt2, set[1]]];
    } else {
      pt1 = Math.floor(span / 2) + set[0];
      return [[set[0], pt1], [pt1, set[1]]];
    }
  },

  _fetch: function () {
    for (i = 0; i < this.securitiesSets.size(); i++) {
      this.set({
        query: this.queryRoot.replace(/#/, this.queries[i])
      });
      this.fetch();
    }
  },

  _distributeQuotes: function () {
    if (!this.get("results") ) return;
    var i = 0, quotes = this.get("results").quote, sets = this.securitiesSets;
    sets.each(function (set) {
      if (!(set.first() && set.first().get("symbol") == quotes[0].Symbol)) return;

      set.each(function (model) {
        if ( quotes[i].Symbol == model.get("symbol") ) {
          model.quotes().set("results", {quote: quotes[i++]});
        }
      });
    });
  },

  _baseCooldown: function () {
    return 4000 + 2000 * Math.random();
  },
});
