DbAlpha.Views.Root = Backbone.CompositeView.extend({
  template: JST["root/landing"],

  initialize: function () {
    this.addSubview("#slideshow-container", new DbAlpha.Views.SlideshowFade());
  },

  render: function () {
    var content = this.template();
    this.$el.html( content );
    this.attachSubviews();
    return this;
  },
});
