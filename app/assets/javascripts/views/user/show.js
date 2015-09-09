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
    return this;
  }
});
