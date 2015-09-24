DbAlpha.Views.MarketBoard = Backbone.CompositeView.extend({
  className: "market-board",
  template: JST["market/market_board"],

  initialize: function () {
    this.collection.fetch({merge: true});
    this.interval = setInterval(this.marquee.bind(this), 200);
    this.refresh = 0;
    this.rows = [];
    this._setup();
    this._setupBinded = this._setup.bind(this);
    $(window).on("resize", this._setupBinded);

    this.listenTo(this.collection, "sync", this._refresh);
    this.listenTo(this.collection, "add", this._addBoardItem);
    this.listenTo(this.collection, "remove", this._removeBoardItem);
    this.collection.quotes().updateBegin();
    this.collection.each(this._addBoardItem.bind(this));
    this.addSubview(".market-view.information", new DbAlpha.Views.MarketTime());
  },

  events: {
    "click .board-list-item": "_clickNavigate",
    "mouseover li.market-board-row": "_pauseRow",
    "mouseleave li.market-board-row": "_pauseRowUndo",
  },

  marquee: function () {
    if (this.overSize) {
      var a, b;
      for (i = 1; i <= this.rows.length; i++) {
        a = this.rows[i - 1];
        b = this.rows[i % this.rows.length];
        if (a.marquee(b)) return; //automatically staggers any behaviors
      }
    }
  },

  render: function () {
    this.$el.html( this.template( this.collection.ops ) );
    this.attachSubviews();
    return this;
  },

  remove: function () {
    $(window).off("resize", this._setupBinded);
    this.collection.quotes().updateEnd();
    Backbone.CompositeView.prototype.remove.call(this);
    clearInterval(this.interval);
  },

  _addBoardItem: function (model) {
    this.addSubview("marquee-list", new DbAlpha.Views.MarketBoardItem({
      model: model
    }));
  },

  _removeBoardItem: function (model) {
    this.removeModelSubview("marquee-list", model);
  },

  _addBoardRow: function (row) {
    this.addSubview("ul.market-board-rows", row);
  },

  _removeBoardRow: function (model) {
    this.removeSubview("ul.market-board-rows", model);
  },

  _clickNavigate: function (event) {
    var etfAddress, path, symbol = $(event.currentTarget).attr("symbol");
    if (!symbol) return;

    etfAddress = this._etfAddress(symbol);
    path = (etfAddress && "marketboards/" + etfAddress.first()) || ("securities/" + symbol);
    Backbone.history.navigate(path, trigger_true);
  },

  _distributeRows: function () {
    var rowUsed = this._rowUsageOptimizer(),
        length =  this.subviews("marquee-list").size(),
        offset = this.rows[0].start || 0,
        divide = length / rowUsed;

    this.wMin = Math.min(Math.ceil(divide), this.wLimit);
    this.overSize = this.wLimit * rowUsed < this.subviews("marquee-list").size();

    for (i = 0; i < this.rows.length; i++) {
      if (i < rowUsed) {
        start = Math.floor(i * divide) + offset;
        end = Math.floor(( i + 1 ) * divide - 1) + offset;
      } else {
        start = end = -1;
      }
      this.rows[i].setViewBounds(start, end, i );
    }
  },

  _etfAddress: function (symbol) {
    var spdr = /^xl[befikpuvy]$/i.exec(symbol);
    if (spdr) return _(spdr);

    return /^SPY$/i.exec(symbol) && _(["SPX", "SPY"]);
  },

  _pauseRow: function (event) {
    var index = $(event.currentTarget).data().index;
    try { this.rows[index].freeze = true; } catch (e) {}
  },

  _pauseRowUndo: function (event) {
    var index = $(event.currentTarget).data().index;
    try { this.rows[index].freeze = false; } catch (e) {}
  },

  // refresh
  _refresh: function () {
    this.collection.removeNonlistMembers();
    this.collection.quotes().allocateSets();
    this._setup();
    this.$("#dropdownMenu3").html( this.collection.ops.name || "Market Board" );
  },

  _rowUsageOptimizer: function () {
    var totalNum = this.subviews("marquee-list").size();
    var rowCount = this.rows.length;
    for (i = 1; i <= rowCount; i++) {
      if (totalNum % i == 0 && this.wLimit * i >= totalNum) return i;
    }
    return Math.min( rowCount, Math.floor(totalNum / this.wLimit + 1) );
  },

  _rowWidthCalculate: function () {
    this.wLimit = Math.floor( this.$(".market-board-row").eq(0).innerWidth() / 160 );
    this.wLimit = Math.max(1, this.wLimit);
  },

  _setRows: function () {
    _.each(this.rows, this._removeBoardRow.bind(this) );
    while ( this.rows.length < 3 || 160 * this.rows.length < window.innerHeight ) {
      this.rows.push( new DbAlpha.Views.MarketBoardRow({board: this}) );
    }
    while ( this.rows.length > 3 && 160 * this.rows.length > window.innerHeight - 200 ) {
      this.rows.pop().remove();
    }
    _.each(this.rows, this._addBoardRow.bind(this) );
  },

  _setup: function () {
    this.collection.size() ? this.$el.removeClass("loading") : this.$el.addClass("loading")

    this._setRows();
    this.collection.quotes().reset();
    this._rowWidthCalculate();
    this._distributeRows();
  },
});
