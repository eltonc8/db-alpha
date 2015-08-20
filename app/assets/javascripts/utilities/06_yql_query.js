Backbone.YqlQuery = Backbone.Model.extend({
  rootUrl: "https://query.yahooapis.com/v1/public/yql?format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  url: function () {
    var uri = this.rootUrl;
    if (this.query) { uri += "&q=" + encodeURIComponent(this.query); }
    return uri;
  },

  initialize: function (options) {
    if (options.query) {this.query = options.query;}
  },

  parse: function (response) {
    return response.query;
  }
});
