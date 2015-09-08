DbAlpha.Views.SecuritySubTwitter = Backbone.CompositeView.extend({
  template: JST['security/security_twitter'],
  className: "security-show-sub-twitter col-md-3 col-sm-4 col-xs-12",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  render: function () {
    if (this.model.escape("twitter_widget_id") && !this._content) {
      this._content = this.template({ model: this.model });
      this.$el.html( this._content );
    }

    return this;
  }
});
