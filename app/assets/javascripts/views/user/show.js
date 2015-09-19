DbAlpha.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['security/security_show'],
  className: "user-show row",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.addViews();
  },

  addViews: function () {
    // this.addSubview('.left',
    //   new DbAlpha.Views.SecuritySubInfo({ model: this.model })
    // );
    this.addSubview('.left',
      new DbAlpha.Views.SecurityTradingviewWidget({ model: this.model })
    );
    // this.addSubview('.top',
    //   new DbAlpha.Views.SecuritySubRss({ model: this.model })
    // );
    // this.addSubview('.top',
    //   new DbAlpha.Views.SecuritySubTwitter({ model: this.model })
    // );
    this.addSubview('.bottom',
      new DbAlpha.Views.PostIndex()
    );
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    this._userAuth();
    return this;
  },

  _userAuth: function () {
    //ensures that the user has signed in.
    if ( DbAlpha.Models.user.isNew() ) {
      // gives time for syncing to occur
      setTimeout( this._userCheck.bind(this), 1000);
    }
  },

  _userCheck: function () {
    if ( DbAlpha.Models.user.isNew() ) {
      bootbox.alert("<br><br>Hello! You are not currently signed in.<br>" +
      "Please sign in, or functions will be limited.<br>" +
      "Sample public notes and entries are displayed.<br><br>");
    }
  }
});
