DbAlpha.Views.Navbar = Backbone.CompositeView.extend({
  template: JST["navbar/navbar"],

  events: {

  },

  render: function () {
    var content = this.template();
    this.$el.html( content );
    return this;
  }
});

DbAlpha.Views.navbar = new DbAlpha.Views.Navbar();
