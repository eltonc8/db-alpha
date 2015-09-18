DbAlpha.Views.MarketBoardLimited = DbAlpha.Views.MarketBoard.extend({
  render: function () {
    this.$el.html( this.template( this.collection.ops ) );
    this.attachSubviews();
    return this;
  },

  _setup: function () {
    _.each(this.rows, this._removeBoardRow.bind(this) );
    this.rows = [new DbAlpha.Views.MarketBoardRow({board: this})];
    _.each(this.rows, this._addBoardRow.bind(this) );
    this._rowWidthCalculate();
  },
});
