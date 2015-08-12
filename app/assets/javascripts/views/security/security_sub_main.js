DbAlpha.Views.SecuritySubMain = Backbone.CompositeView.extend({
  tagName: "security-show-sub-main",

  render: function () {
    this.$el.html( this.model.symbol );
  }
});
