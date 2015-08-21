DbAlpha.Views.SecurityFundamentalItem = Backbone.CompositeView.extend({
  tagName: "li",
  className: "fundamental-item",

  initialize: function (options) {
    this.key = options && options.key;
    this.label = options && options.label;
  },

  render: function () {
    this.$el.html( "<strong>" + this.label + "</strong>: " + this.value);
    return this;
  },

  update: function (values) {
    var val = +values[this.key] ?
              Math.round(values[this.key] * 100) / 100 :
              values[this.key];
    if (this.value < val) { this._triggerGreen(); }
    else if (this.value > val) { this._triggerRed(); }
    this.value = values[this.key];
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
