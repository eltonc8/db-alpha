DbAlpha.Views.SecuritySubTwitter = Backbone.CompositeView.extend({
  className: "security-show-sub-twitter",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  render: function () {
    this.$el.html( this.model.escape("symbol") );
    return this;
  }
});
