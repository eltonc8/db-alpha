DbAlpha.Views.MarketBoardRow = Backbone.CompositeView.extend({
  tagName: "li",
  className: "market-board-row",

  attributes: {
    "width": "160px",
    "background-color": "#999",
  },

  initialize: function () {},

  render: function () {
    var content = $("<div>");
    content.html($("<ul>"));
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  _addBoardItem: function (model) {
    this.addSubview("ul", new DbAlpha.Views.MarketBoardItem({
      model: model
    }));
  },

  _removeBoardItem: function (model) {
    this.removeModelSubview("ul", model);
  },

  _size: function () {
    this._subviews("ul").size();
  },
});
