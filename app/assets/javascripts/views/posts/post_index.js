DbAlpha.Views.PostIndex = Backbone.CompositeView.extend({
  className: "post-index",
  template: JST['post/index'],

  initialize: function () {
    if (this.model) {
      this.collection = this.model.posts();
      this.listenTo(this.model, "sync", this.render);
    } else {
      this.collection = new DbAlpha.Collections.Posts([])
    }

    this.listenTo(this.collection, "sync add remove", this.render);
    this.listenTo(this.collection, 'add', this.addPostListItem);
    this.listenTo(this.collection, 'remove', this.removePostListItem);

    this.collection.each(function (post) {
      this.addPostListItem(post);
    }.bind(this));
  },

  events: {
    "click div.post-index-new": "addNewForm"
  },

  addNewForm: function () {
    if (this.collection.any( function(model) {return model.isNew();} )) return;
    var newPost = new this.collection.model();
    newPost.set({
      tags: this.model && this.model.escape("symbol"),
      editable: true
    });
    this.collection.add(newPost);
  },

  addPostListItem: function (post) {
    var postListItem = new DbAlpha.Views.Post({
      model: post,
      collection: this.collection
    });
    this.addSubview("ul.post-index-list", postListItem, post.isNew());
  },

  removePostListItem: function (post) {
    this.removeModelSubview("ul.post-index-list", post);
  },

  render: function () {
    var content = this.template({model: this.model});
    this.$el.html( content );
    this.attachSubviews();

    return this;
  }
});
