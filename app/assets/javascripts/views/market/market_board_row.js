DbAlpha.Views.MarketBoardRow = Backbone.CompositeView.extend({
  tagName: "li",
  className: "market-board-row",
  template: JST["market/board_row"],
  ops: { width: 160 },

  attributes: {
    "width": "160px",
    "background-color": "#999",
  },

  initialize: function () {},

  render: function () {
    var content = this.template( this.ops );
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addBoardItem: function (model) {
    this.addSubview("ul.marquee-list", new DbAlpha.Views.MarketBoardItem({
      model: model
    }));
  },

  removeBoardItem: function (model) {
    this.removeModelSubview("ul.marquee-list", model);
  },

  resize: function (width) {
    width = Math.floor(width / 160);
    width = Math.max(1, width);
    this.ops.width = width * 160;
  },

  setWidth: function (rowWidth) {
    this.$("div.marquee-container").css({width: rowWidth});
    this.$("ul.marquee-list").css({width: rowWidth + 160});
  },

  size: function () {
    return this.subviews("ul.marquee-list").size();
  },
});
