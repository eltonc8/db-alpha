DbAlpha.Collections.Posts = Backbone.Collection.extend({
  model: DbAlpha.Models.Post,

  initialize: function (models, options) {
    this.security = options && options.security;
  },

  comparator: function (post) {
    return Date.parse( post.escape("created_at") ) || new Date();
  },

  url: function () {
    return (this.security ? this.security.url() : "/api") + "/posts";
  },
});
