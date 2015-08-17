DbAlpha.Views.Post = Backbone.View.extend({
  template: JST['post/post_form'],
  tagName: "li",
  className: "post-list-item",

  initialize: function (options) {
    if (options) { this.}
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click input.btn": "submitForm"
  },

  render: function () {
    var content = this.template({
      model: this.model
    });
    this.$el.html(content);
    return this;
  },

  submitForm: function (event) {
    event.preventDefault();
    var formData =this.$("form").serializeJSON().post
    this.model.save({}, {
      success: this._saveSuccess.bind(this),
      errors: this._saveErrors.bind(this)
    });

  },

  _saveErrors: function () {

  },

  _saveSuccess: function () {

  },
});
