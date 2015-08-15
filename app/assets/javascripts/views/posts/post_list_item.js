DbAlpha.Views.Post = Backbone.View.extend({
  template: JST['post/post_list_item'],
  tagName: "li",
  className: "post-list-item",

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
