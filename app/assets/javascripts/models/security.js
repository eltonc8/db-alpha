DbAlpha.Models.Security = Backbone.Model.extend({
  urlRoot: "/api/securities",

  url: function () {
    return this.urlRoot + "/" + ( this.id || this.escape("symbol") );
  }
});
