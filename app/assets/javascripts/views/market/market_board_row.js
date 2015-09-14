DbAlpha.Views.MarketBoardRow = Backbone.CompositeView.extend({
  tagName: "li",
  className: "market-board-row",
  template: JST["market/board_row"],

  attributes: {
    "width": "160px",
    "background-color": "#999",
  },

  initialize: function () {},

  render: function () {
    var content = this.template();
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

  size: function () {
    return this.subviews("ul.marquee-list").size();
  },
});
