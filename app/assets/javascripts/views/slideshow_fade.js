DbAlpha.Views.SlideshowFade = Backbone.View.extend({
  template: JST["root/slideshow"],
  templateSlide: JST["root/slideshow_item"],
  className: "slideshow initial",
  slideContents: [
    [
      "http://res.cloudinary.com/dwlxp9sf7/image/upload/c_crop,h_1600,w_2400/v1440498595/background/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg",
      "A research tool to help you organize your investment thesis."
    ],
    [
      "http://res.cloudinary.com/dwlxp9sf7/image/upload/e_tilt_shift/v1440499178/background/spy.png",
      '"What you really want to do in investments is figure out what is important and knowable." -Warren Buffet'
    ],
    [
      "http://res.cloudinary.com/dwlxp9sf7/image/upload/c_crop,h_1200,w_1800/v1440498558/background/eDLHCtzRR0yfFtU0BQar_sylwiabartyzel_themap.jpg",
      "A tool to help you journal your thoughts, analyses, and plan."
    ],
    [
      "http://res.cloudinary.com/dwlxp9sf7/image/upload/v1439571654/warren_buffett_ah25n1.jpg",
      '"The best asset is your own self." -Warren Buffett'
    ],
    [
      "http://res.cloudinary.com/dwlxp9sf7/image/upload/c_limit,h_1600,w_2400/v1440498554/background/photo-1421757295538-9c80958e75b0.jpg",
      "A dashboard to see news and updates next to your investment ideas."
    ],
    [
      "http://res.cloudinary.com/dwlxp9sf7/image/upload/c_scale,w_2400/v1440499885/background/photo-1428677361686-f9d23be145c9.jpg",
      "Read. Plan. Act."
    ],
  ],

  // this view takes a DOM element and wrap its children into a slideshow
  // expects two "left or right" buttons, with data-slide of +/- 1
  initialize: function (options) {
    this.interval = 8000;
    this.transition = 1000;
    this._slides = [];
    _.each(this.slideContents, this.addSlide.bind(this));
    this._index = Math.floor( Math.random() * this._slides.length );
    this._manualCount = 0;
    this.slide();
  },

  events: {
    "click a": "manualOverrideSlideshow"
  },

  manualOverrideSlideshow: function (event) {
    this._manualCount += 1;
    this.slide($(event.currentTarget).data("slide"));
  },

  addSlide: function (imgTextArray) {
    var slide = $( this.templateSlide({
      text: imgTextArray[1],
      imgUrl: imgTextArray[0]
    }) );
    this._slides.push(slide);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    _.each(this._slides, function (slide) {
      this.$el.prepend(slide);
    }.bind(this));
    $(this.el).attr('id', 'slideshow');

    var $el = this.$el;
    setTimeout( function () { $el.removeClass("initial");}, 2000 );
    return this;
  },

  slide: function (manualOffset) {

    if (!manualOffset && this._manualCount) {
      this._manualCount -= 1;
      return;
    }
    this._slides[this._index].removeClass("active");
    this._index = (this._index + (manualOffset || 1)) % this._slides.length;
    this._slides[this._index].addClass("active");
    this.schedule();
  },

  schedule: function () {
    setTimeout( this.slide.bind(this), this.interval );
  },
});
