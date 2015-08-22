DbAlpha.Views.MarketBoardItem = Backbone.View.extend({
  template: JST["market/board_list_item"],
  tagName: "li",
  className: "board-item",

  initialize: function () {
  },

  render: function () {
    var content = this.template({model: this.model});
    this.$el.html( content );
    return this;
  },

  update: function (quotes) {
    var val = quotes[this.key];
    val = Math.round(val * 100) / 100 ||
          (/%/.test(val) && Math.round(/-?\d*\.\d*/.exec(val) * 100) / 100 + "%" ) ||
          val;
    if      (+this.value && this.value < val) { this._triggerGreen(); }
    else if (+this.value && this.value > val) { this._triggerRed(); }
    this.value = val;
    this.render();
  },

  _triggerDefault: function () {
    this.$el.removeClass("red").removeClass("green");
  },

  _triggerGreen: function () {
    this.$el.addClass("green");
    setTimeout(this._triggerDefault.bind(this), 200);
  },

  _triggerRed: function () {
    this.$el.addClass("red");
    setTimeout(this._triggerDefault.bind(this), 200);
  },
});
