DbAlpha.Views.SecuritySubRSS = Backbone.CompositeView.extend({
  tagName: "security-show-sub-rss",

  render: function () {
    this.$el.html( this.model.symbol );
  }
});
