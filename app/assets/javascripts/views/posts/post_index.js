DbAlpha.Views.PostIndex = Backbone.CompositeView.extend({
  className: "post-index",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  render: function () {
    this.$el.html( "future post index goes here" );
    return this;
  }
});
