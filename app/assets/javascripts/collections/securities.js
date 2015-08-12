DbAlpha.Collections.Securities = Backbone.Collection.extend({
  model: DbAlpha.Models.Security,
  url: "/api/links",

  getOrFetch: function (value) {
    var security;
    if (+value) {
      security = this.get(value);
    } else {
      security = this.findWhere({ symbol: value });
    }
    if (!security) { security = new this.model({ id: value }); }
    security.fetch();
    this.add(security, {merge: true});

    return security;
  }
});
