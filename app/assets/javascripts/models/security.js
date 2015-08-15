DbAlpha.Models.Security = Backbone.Model.extend({
  urlRoot: "/api/securities",
  // query1: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%3D%22",
  // query2: "%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  // initialize: function () {
  //   $.ajax( this.query1 + this.escape("symbol") + this.query2, { success: this.saveData.bind(this) } );
  // },

  url: function () {
    return this.urlRoot + "/" + ( this.escape("symbol") || this.escape("id") );
  },

  parse: function (responseData) {
    if (responseData.feeds) {
      this.articles().set(responseData.feeds);
      delete responseData.feeds;
    }
    return responseData;
  },

  articles: function () {
    if (!this._articles) {
      this._articles = new DbAlpha.Collections.Articles([], { security: this });
    }

    return this._articles;
  },

  posts: function () {
    if (!this._posts) {
      this._posts = new DbAlpha.Collections.Posts([], { security: this });
    }

    return this._posts;
  }
});

// %20 are spaces
// https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%3D%22AAPL%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
// "https://query.yahooapis.com/v1/public/yql?q="
// "select%20*%20"
// "from%20yahoo.finance.quote%20"
// "where%20symbol%3D%22AAPL%22"
// "&format=json&"
// "env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
