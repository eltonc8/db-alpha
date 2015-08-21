DbAlpha.Views.Markets = Backbone.CompositeView.extend({
  template: JST['security/security_show'],
  className: "market-view",

  initialize: function () {

  },

  addViews: function () {
    this.addSubview('.top',
      new DbAlpha.Views.MarketBoard({ collection: this.collection })
    );
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
