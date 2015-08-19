Backbone.YqlQuery = Backbone.Model.extend({
  rootUrl: "https://query.yahooapis.com/v1/public/yql?",

  url: function () {
    var uri = this.rootUrl;
    if (this.query) { uri += encodeURIComponent("&q=" + this.query); }
    return 'https://query.yahooapis.com/v1/public/yql?q=select*from%20yahoo.finance.quotes%20where%20symbol%3D%22mmm%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
  },

  initialize: function (options) {
    if (options.query) {this.query = options.query;}
  },

  parse: function (response) {
    debugger
    return response.query;
  }
});
