DbAlpha.Models.Security = Backbone.Model.extend({
  urlRoot: "/api/securities",
  idAttribute: "symbol",

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
  },

  quotes: function () {
    if (!this._quote) { this._quote = new Backbone.StockQuery({
      security: this
    }); }

    return this._quote;
  }
});
