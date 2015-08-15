DbAlpha.Collections.Posts = Backbone.Collection.extend({
  model: DbAlpha.Models.Post,
  url: function () {
    return "/api/" + (this.model ? this.model.escape("symbol") : "") + "posts";
  },

  comparator: function () {
    return Date.parse( this.escape("created_at") ) || new Date();
  }
});
