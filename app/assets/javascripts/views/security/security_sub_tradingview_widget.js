DbAlpha.Views.SecurityTradingviewWidget = Backbone.CompositeView.extend({
  template: JST["security/security_tradingview_widget"],
  className: "security-show-sub-links",

  initialize: function () {

  },

  render: function () {
    var content = this.template({ model: this.model });
    this.$el.html( content );
    return this;
  }
});
