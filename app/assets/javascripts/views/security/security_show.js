DbAlpha.Views.SecurityShow = Backbone.CompositeView.extend({
  template: JST['security/security_show'],
  className: "security-show",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.addViews();
  },

  addViews: function () {
    this.addSubView('.security-show.left',
      new DbAlpha.Views.SecuritySubMain({ model: this.model })
    );
    this.addSubView('.security-show.left',
      new DbAlpha.Views.SecuritySubLinks({ model: this.model })
    );
    this.addSubView('.security-show.top',
      new DbAlpha.Views.SecuritySubRss({ model: this.model })
    );
    this.addSubView('.security-show.top',
      new DbAlpha.Views.SecuritySubTwitter({ model: this.model })
    );
    this.addSubView('.security-show.bottom',
      new DbAlpha.Views.PostIndex({ model: this.model })
    );
  },

  render: function () {
    // var content = this.template();
    // this.$el.html(content);
    // this.attachSubviews();
    this.$el.html(this.model.symbol);
    return this;
  }

});
