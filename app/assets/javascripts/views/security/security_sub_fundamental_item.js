DbAlpha.Views.SecurityFundamentalItem = Backbone.CompositeView.extend({
  tagName: "li",
  className: "fundamental-item",

  initialize: function (options) {
    this.key = options && options.key;
    this.label = options && options.label;
  },

  render: function () {
    this.$el.html( this.label + ": " + this.value );

    return this;
  },

  update: function (values) {
    if (this.value < values[this.label]) { this._triggerGreen(); }
    else if (this.value > values[this.label]) { this._triggerRed(); }
    this.value = values[this.label];
  },

  _triggerDefault: function () {
    this.removeClass("red").removeClass("green");
  },

  _triggerGreen: function () {
    this.addClass("green");
    setTimeout(_triggerDefault.bind(this), 1);
  },

  _triggerRed: function () {
    this.addClass("red");
    setTimeout(_triggerDefault.bind(this), 1);
  },
});
