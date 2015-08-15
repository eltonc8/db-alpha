DbAlpha.Models.Post = Backbone.Model.extend({
  urlRoot: "/api/posts",

  comparator: function (article) {
    return article.comparator();
  }
});
