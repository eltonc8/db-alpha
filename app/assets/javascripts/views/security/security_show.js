DbAlpha.Views.SecurityShow = Backbone.CompositeView.extend({
  template: JST['security/security_show'],
  className: "security-show row ",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.addViews();
  },

  addViews: function () {
    this.addSubview('.left',
      new DbAlpha.Views.SecuritySubInfo({ model: this.model })
    );
    this.addSubview('.left',
      new DbAlpha.Views.SecurityTradingviewWidget({ model: this.model })
    );
    this.addSubview('.top',
      new DbAlpha.Views.SecuritySubRss({ model: this.model })
    );
    this.addSubview('.top',
      new DbAlpha.Views.SecuritySubTwitter({ model: this.model })
    );
    this.addSubview('.bottom',
      new DbAlpha.Views.PostIndex({ model: this.model })
    );
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
