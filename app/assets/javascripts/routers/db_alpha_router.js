DbAlpha.Routers.DbAlphaRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new DbAlpha.Collections.Securities();
  },

  routes: {
    "": "root",
    "marketboards/": "marketView",
    "marketboards/:value": "marketView",
    "securities": "marketView",
    "securities/:value": "securityShow",
    "homepage": "userShow",
    ":default": "root"
  },

  root: function () {
    var view = new DbAlpha.Views.Root();
    this._swapView(view);
  },

  marketView: function (value) {
    this.collection.setID(value);
    var view = new DbAlpha.Views.MarketBoard({
      collection: this.collection
    });
    this._swapView(view);
  },

  securityShow: function (value) {
    if ( DbAlpha.Models.user.isNew() ) this._userAuth();
    var view = new DbAlpha.Views.SecurityShow({
      model: this.collection.getOrFetch(value)
    });
    this._swapView(view);
  },

  userShow: function () {
    if ( DbAlpha.Models.user.isNew() ) this._userAuth();
    var view = new DbAlpha.Views.UserShow({});
    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(this._view.render().$el);
  },

  _userAuth: function () {
    //ensures that the user has signed in.
    if ( DbAlpha.Models.user.isNew() ) {
      // gives time for syncing to occur
      setTimeout( this._userCheck.bind(this), 2500);
    }
  },

  _userCheck: function () {
    if ( DbAlpha.Models.user.isNew() ) {
      Backbone.history.navigate("", trigger_true);
      bootbox.alert("<br><br><br>Hello! Please sign in so that pages may be rendered correctly!");
    }
  }


});
