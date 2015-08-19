DbAlpha.Views.SecuritySubRss = Backbone.CompositeView.extend({
  template: JST['security/security_articles'],

  className: "security-show-sub-rss col-lg-8 col-md-7 col-sm-8 col-xs-12",

  initialize: function () {
    this.collection = this.model.articles();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addArticleSubview);
    this.listenTo(this.collection, 'sync add', this.render);

    this.collection.each(function (article) {
      this.addArticleSubview(article);
    }.bind(this));
  },

  addArticleSubview: function (article) {
    var articleListItem = new DbAlpha.Views.ArticleListItem({
      model: article
    });
    this.addSubview("ul.article-feed", articleListItem);
  },

  render: function () {
    this.$el.html( this.template({ model: this.model }) );
    this.attachSubviews();

    return this;
  }
});
