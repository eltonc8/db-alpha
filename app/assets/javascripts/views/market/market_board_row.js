DbAlpha.Views.MarketBoardRow = Backbone.View.extend({
  tagName: "li",
  className: "market-board-row",
  template: JST["market/board_row"],

  attributes: {
    "width": "160px",
    "background-color": "#999",
  },

  initialize: function (options) {
    this.board = options.board;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachBoardItems();
    return this;
  },

  marquee: function () {
    // debugger
  },

  attachBoardItems: function () {
    var subviews = this.board.subviews("marquee-list").slice(this.start, this.end + 1);
    _(subviews).each( function (subview) {
      this.$("ul.marquee-list").append(subview.$el);
    }.bind(this));
  },

  setViewBounds: function (start, end, length) {
    this.start = start;
    this.end = Math.min( end, start + this.board.wLimit + 1 );
    this.render();
    this.setWidths(length);
  },

  setWidths: function (length) {
    length = Math.ceil(length);
    length = Math.min(length, this.board.wLimit);
    this.$("div.marquee-container").css({width: 160 * length});
    this.$("ul.marquee-list").css({width: 160 * (length + 1)});
  },
});
