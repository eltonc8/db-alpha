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
    var list = this._list(), subviews = list.slice(this.start, this.end + 1);
    if (this.end >= list.size()) {
      var start = Math.max(0, this.start - list.size()),
          end = this.end + 1 - list.size(),
          wrapSubviews = list.slice(start, end);
      subviews = subviews.concat(wrapSubviews);
    }

    while (this.start != this.end && subviews.length < this.board.wMin) {
      var filler = $("<li>").addClass("board-list-item");
      subviews.push(filler);
    }

    _(subviews).each( function (subview) {
      if (subview.model) {
        this.$("ul.marquee-list").append(subview.$el);
      } else {
        this.$("ul.marquee-list").append(subview);
      }
    }.bind(this));
  },

  length: function () {
    return this.end - this.start + 1;
  },

  marquee: function (successor) {
    if (this.offset || this.end - this.start >= this.board.wLimit) {
      if (this.offset++ >= 15) {
        this.offset = 0;
        this._offset();
        return true;
      }
    } else {
      if (this.end <= successor.start) {
        if (this.end + 1 < successor.start) this.push();
      } else {
        var length = this._list().size();
        if ((this.end + 1) - length < successor.start) this.push();
      }
    }
  },

  push: function () {
    this.end++;
    this.attachBoardItems();
  },

  shift: function () {
    this.start++;
    if (this.start >= this._list().size()) {
      this.start -= this._list().size();
      this.end -= this._list().size();
    }
    this.offset = 0;
    this.attachBoardItems();
  },

  setViewBounds: function (start, end, i) {
    this.$el.data("index", i);
    this.start = start;
    this.offset = 0;
    this.end = Math.min( end, start + this.board.wLimit + 1 );
    this.render();
    this.setWidths();
  },

  setWidths: function () {
    var length = this.board.wMin;
    this.$("div.marquee-container").css({width: 160 * length});
    this.$("ul.marquee-list").css({width: 160 * (length + 1)});
  },

  _list: function () {
    return this.board.subviews("marquee-list");
  },

  _offset: function () {
    this.$el.addClass("offset");
    setTimeout( this._offsetUndo.bind(this), 1000);
  },

  _offsetUndo: function () {
    this.$el.removeClass("offset");
    this.shift();
  },
});
