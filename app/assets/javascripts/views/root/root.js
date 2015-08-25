DbAlpha.Views.Root = Backbone.CompositeView.extend({
  template: JST["root/landing"],

  render: function () {
    var content = this.template();
    this.$el.html( content );
    return this;
  },
});
