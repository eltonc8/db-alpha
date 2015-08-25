DbAlpha.Models.User = Backbone.Model.extend({
  urlRoot: "/session",

  url: function () {
    return this.urlRoot;
  }
});

DbAlpha.Models.user = new DbAlpha.Models.User();
