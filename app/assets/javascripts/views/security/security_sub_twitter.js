DbAlpha.Views.SecuritySubTwitter = Backbone.CompositeView.extend({
  template: JST['security/security_twitter'],
  className: "security-show-sub-twitter col-lg-2 col-md-3 col-sm-8 col-xs-12",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  render: function () {
    this.$el.html( this.template );
    return this;
  }
});
