DbAlpha.Views.SecuritySubRss = Backbone.CompositeView.extend({
  className: "security-show-sub-rss col-lg-8 col-md-7 col-sm-8 col-xs-12",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  render: function () {
    this.$el.html( this.model.escape("symbol") );
    return this;
  }
});
