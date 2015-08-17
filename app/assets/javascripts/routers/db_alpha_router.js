DbAlpha.Routers.DbAlphaRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new DbAlpha.Collections.Securities();
  },

  routes: {
    "": "root",
    "securities/:value": "securityShow"
  },

  root: function () {
    Backbone.history.navigate("#/securities/spy")
    // var view = new DbAlpha.Views.Root({});
    // this._swapView(view);
  },

  securityShow: function (value) {
    var view = new DbAlpha.Views.SecurityShow({
      model: this.collection.getOrFetch(value)
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(this._view.render().$el);
  }
});
