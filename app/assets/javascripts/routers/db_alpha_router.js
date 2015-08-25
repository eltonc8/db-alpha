DbAlpha.Routers.DbAlphaRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new DbAlpha.Collections.Securities();
  },

  routes: {
    "": "root",
    "securities": "marketView",
    "securities/:value": "securityShow",
    "homepage": "userShow",
  },

  redirect: function () {
    Backbone.history.navigate("redirect");
    Backbone.history.navigate("securities", trigger_true);
  },

  root: function () {
    if ( !DbAlpha.Models.user.isNew() ) {
      this.redirect();
    } else {
      var view = new DbAlpha.Views.Root();
      this._swapView(view);
    }
  },

  marketView: function () {
    if ( DbAlpha.Models.user.isNew() ) Backbone.history.navigate("", trigger_true);
    var view = new DbAlpha.Views.MarketBoard({
      collection: this.collection
    });
    this._swapView(view);
  },

  securityShow: function (value) {
    if ( DbAlpha.Models.user.isNew() ) Backbone.history.navigate("", trigger_true);
    var view = new DbAlpha.Views.SecurityShow({
      model: this.collection.getOrFetch(value)
    });
    this._swapView(view);
  },

  userShow: function () {
    if ( DbAlpha.Models.user.isNew() ) Backbone.history.navigate("", trigger_true);
    var view = new DbAlpha.Views.UserShow({});
    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(this._view.render().$el);
  }
});
