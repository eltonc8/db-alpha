DbAlpha.Views.SecuritySubTwitter = Backbone.CompositeView.extend({
  tagName: "security-show-sub-twitter",

  render: function () {
    this.$el.html( this.model.symbol );
  }
});
