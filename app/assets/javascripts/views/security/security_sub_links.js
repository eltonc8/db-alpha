DbAlpha.Views.SecuritySubLinks = Backbone.CompositeView.extend({
  tagName: "security-show-sub-links",

  render: function () {
    this.$el.html( this.model.symbol );
  }
});
