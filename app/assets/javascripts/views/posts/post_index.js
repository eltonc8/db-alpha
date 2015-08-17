DbAlpha.Views.PostIndex = Backbone.CompositeView.extend({
  className: "post-index",
  template: JST['post/index'],

  initialize: function () {
    this.collection = this.model ? this.model.posts() : new DbAlpha.Collections.Posts([]);
    this.listenTo(this.collection, "sync add remove", this.render);
    this.listenTo(this.collection, 'add', this.addPostListItem);

    this.collection.each(function (post) {
      this.addPostSubview(post);
    }.bind(this));
  },

  events: {
    "click button.post-index": "addNewForm"
  },

  addNewForm: function () {
    this.collection.add(new this.collection.model({symbol: this.model && this.model.escape("symbol")}) );
  },

  addPostListItem: function (post) {
    var postListItem = new DbAlpha.Views.Post({
      model: post
    });
    this.addSubview("ul.post-index", postListItem);
  },

  render: function () {
    this.$el.html( this.template() );
    this.attachSubviews();

    return this;
  }
});
