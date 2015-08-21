DbAlpha.Collections.Securities = Backbone.Collection.extend({
  model: DbAlpha.Models.Security,
  url: "/api/links",



  getOrFetch: function (value) {
    var security, attrs;
    if (+value) {
      attr = { id: value };
      security = this.get(value);
    } else {
      attr = { symbol: value };
      security = this.findWhere( attr );
    }
    if (!security) { security = new this.model( attr ); }
    security.fetch();
    this.add(security, {merge: true});

    return security;
  }
});
