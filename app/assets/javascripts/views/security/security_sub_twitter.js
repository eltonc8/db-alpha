DbAlpha.Views.SecuritySubTwitter = Backbone.CompositeView.extend({
  template: JST['security/security_twitter'],
  className: "security-show-sub-twitter col-lg-2 col-md-3 col-sm-8 col-xs-12",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  content: function () {
    if (this.model.escape("twitter_widget_id") && !this._content) {
      this._content = this.template({ model: this.model });
    }

    return this._content;
  },

  render: function () {
    this.$el.html( this.content() );
    return this;
  }
});
