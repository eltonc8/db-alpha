DbAlpha.Views.SecurityTradingviewWidget = Backbone.View.extend({
  template: JST["security/security_tradingview_widget"],
  className: "security-show-sub-links",

  content: function () {
    if (!this._content) {
      this._content = this.template({ model: this.model });
    }

    return this._content;
  },

  render: function () {
    this.$el.html( this.content() );
    return this;
  }
});
