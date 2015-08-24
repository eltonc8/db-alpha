DbAlpha.Views.Markets = Backbone.CompositeView.extend({
  className: "market-view",

  addViews: function () {
    this.addSubview('.top',
      new DbAlpha.Views.MarketBoard({ collection: this.collection })
    );
  },

  render: function () {
    this.$el.html( $("<ul>").addClass("top") );

    this.attachSubviews();
    return this;
  }
});
