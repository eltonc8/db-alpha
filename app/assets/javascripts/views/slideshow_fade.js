DbAlpha.Views.SlideshowFade = Backbone.View.extend({
  // this view takes a DOM element and wrap its children into a slideshow
  // expects two "left or right" buttons, with data-slide of +/- 1
  initialize: function (options) {
    this.interval = options.interval || 8000;
    this.transition = options.transition || 1000;
    this.setElement(options.slides);
    this._array = this.$el.children(".slide").hide();
    this._index = Math.floor( Math.random() * this._array.length );
    this._manualCount = 0;
    this.render();
  },

  events: {
    "click a": "manualOverrideSlideshow"
  },

  manualOverrideSlideshow: function (event) {
    this._manualCount += 1;
    this.render($(event.currentTarget).data("slide"));
  },

  render: function (manualOffset) {
    if (!manualOffset && this._manualCount) {
      this._manualCount -= 1;
      return;
    }
    this._array.eq(this._index).fadeOut(this.transition, "swing");
    this._index = (this._index + (manualOffset || 1)) % this._array.length;
    this._array.eq(this._index).fadeIn(this.transition, "swing");
    this.schedule();
  },

  schedule: function () {
    setTimeout( this.render.bind(this), this.interval );
  }
});
