DbAlpha.Views.SecuritySubInfo = Backbone.View.extend({
  className: "security-show-sub-info",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  render: function () {
    this.$el.html( this.model.escape("symbol") );
    return this;
  }
});
