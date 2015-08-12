DbAlpha.Views.SecuritySubLinks = Backbone.CompositeView.extend({
  className: "security-show-sub-links",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  render: function () {
    this.$el.html( this.model.escape("symbol") );
    return this;
  }
});
