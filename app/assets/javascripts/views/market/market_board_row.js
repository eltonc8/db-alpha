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
    this.offset = 0;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachBoardItems();
    return this;
  },

  attachBoardItems: function () {
    this.$("ul.marquee-list").empty();
    var subviews = this.board.subviews("marquee-list").slice(this.start, this.end + 1);
    _(subviews).each( function (subview) {
      this.$("ul.marquee-list").append(subview.$el);
    }.bind(this));
    if (subviews.length < this.board.wMin) {
      var filler = $("<li>").addClass("board-list-item");
      this.$("ul.marquee-list").append(filler);
    }
  },

  marquee: function (successor) {
    if (this.offset || this.end - this.start >= this.board.wLimit) {
      if ( this.offset >= -160) {
        this.offset--;
        this.$("ul.marquee-list").css({left: this.offset});
      } else {
        this.shift();
        this.$("ul.marquee-list").css({left: this.offset});
      }
    } else {
      if (this.end + 1 < successor.start) this.push();
    }
  },

  push: function () {
    this.end++;
    this.attachBoardItems();
  },

  shift: function () {
    this.start++;
    this.offset = 0;
    this.attachBoardItems();
  },

  setViewBounds: function (start, end) {
    this.start = start;
    this.end = Math.min( end, start + this.board.wLimit + 1 );
    this.render();
    this.setWidths();
  },

  setWidths: function () {
    var length = this.board.wMin;
    this.$("div.marquee-container").css({width: 160 * length});
    this.$("ul.marquee-list").css({width: 160 * (length + 1)});
  },
});
