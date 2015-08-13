DbAlpha.Views.SecuritySubLinks = Backbone.CompositeView.extend({
  template: JST["security/security_links"],
  className: "security-show-sub-links",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  render: function () {
    var content = this.template({ model: this.model });
    this.$el.html( content );
    return this;
  }
});
