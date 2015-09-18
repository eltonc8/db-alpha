DbAlpha.Views.Root = Backbone.CompositeView.extend({
  template: JST["root/landing"],

  initialize: function () {
    this.addSubview("#slideshow-container", new DbAlpha.Views.SlideshowFade());

    if (this.collection.length < 1) this.collection.setID("SPDR");
    this.addSubview("#landing-market-board",
      new DbAlpha.Views.MarketBoardLimited({ collection: this.collection })
    );
  },

  render: function () {
    var content = this.template();
    this.$el.html( content );
    this.attachSubviews();
    return this;
  },
});
