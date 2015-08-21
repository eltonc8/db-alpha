Backbone.YqlQuery = Backbone.Model.extend({
  rootUrl: "https://query.yahooapis.com/v1/public/yql?format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  url: function () {
    var uri = this.rootUrl;
    if (this.attributes.query) { uri += "&q=" + encodeURIComponent(this.attributes.query); }

    return uri;
  },

  initialize: function (options) {
    if (options.query) { this.attributes.query = options.query; }
  },

  parse: function (response) {
    return response.query;
  }
});

Backbone.StockQuery = Backbone.YqlQuery.extend({
  queryRoot: 'select*from yahoo.finance.quotes where symbol="#{}"',

  initialize: function (options) {
    if (options && options.security) { this.security = options.security; }
    this.listenTo(this.security, "sync", this.updateQuery);
    this.updateQuery();
  },

  updateQuery: function () {
    this.set({
      query: this.queryRoot.replace("#{}", this.security.get("symbol"))
    });
  }
});