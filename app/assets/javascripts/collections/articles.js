DbAlpha.Collections.Articles = Backbone.Collection.extend({
  model: DbAlpha.Models.Article,

  initialize: function (models, options) {
    this.security = options.security;
  },

  comparator: function (article) {
    return article.escape("published");
  }
});
