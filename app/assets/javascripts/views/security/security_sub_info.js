DbAlpha.Views.SecuritySubInfo = Backbone.CompositeView.extend({
  template: JST['security/security_info'],
  className: "security-show-sub-info",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.attachFundamentals();
    this.render();
  },

  attachFundamentals: function () {
    var fundamentals = new DbAlpha.Views.SecurityFundamentals({
      model: this.model
    });
    this.addSubview("div.info-fundamentals-container",
      new DbAlpha.Views.SecurityFundamentals({
        model: this.model
      })
    );
  },

  render: function () {
    this.$el.html( this.template({ model: this.model }) );
    return this;
  }
});
