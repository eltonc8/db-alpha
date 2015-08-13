DbAlpha.Views.ArticleListItem = Backbone.View.extend({
  template: JST['security/article_list_item'],
  tagName: "li",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      model: this.model
    });
    this.$el.html(content);
    return this;
  }
});
