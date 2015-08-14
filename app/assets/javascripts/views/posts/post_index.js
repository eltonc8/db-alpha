DbAlpha.Views.PostIndex = Backbone.CompositeView.extend({
  className: "post-index",
  template: JST['post/index'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  render: function () {
    var content = this.template();
    this.$el.html( content );
    return this;
  }
});
