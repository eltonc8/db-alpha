DbAlpha.Views.MarketBoard = Backbone.CompositeView.extend({
  initialize: function () {
    this.collection._updateQuote();
    this.listenTo(this.collection, "add", this._addBoardItem);
    this.listenTo(this.collection.quotes(), "sync", this._updateBoardItems);
    this.collection.each(this._addBoardItem.bind(this));
  },

  render: function () {
    this.$el.html( $("<ul>") );
    this.attachSubviews();
    return this;
  },

  _addBoardItem: function (model) {
    this.addSubview("ul", new DbAlpha.Views.MarketBoardItem({
      model: this.model
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
      return 8000 + 2000 * Math.random();
    } else {
      time.setUTCHours(13);
      time.setMinutes(29);
      time.setDate(time.getDate() + (time.getDay() === 5 && 3) || (time.getDay() === 6 && 2) || 1);
      return time - new Date();
    }
  },

  _updateBoardItems: function () {
    var quote = this.collection.quotes().attributes.results.quote;
    this.eachSubview( function (boardItem) {
      boardItem.update(quote);
    });
  },
});
