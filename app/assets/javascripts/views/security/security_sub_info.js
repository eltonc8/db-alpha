DbAlpha.Views.SecuritySubInfo = Backbone.View.extend({
  template: JST['security/security_info'],
  className: "security-show-sub-info",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  render: function () {
    this.$el.html( this.template({ model: this.model }) );
    return this;
  }
});
