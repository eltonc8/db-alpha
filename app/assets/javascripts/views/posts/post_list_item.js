DbAlpha.Views.Post = Backbone.View.extend({
  tagName: "li",
  className: "post-list-item article-list-item",

  template: function () {
    if (this.state === "edit") { return JST['post/post_form']; }
    if (this.state === "show") { return JST['post/post_show']; }
    return JST['post/post_list_item'];
  },

  initialize: function (options) {
    if (options) { this.symbol = options.symbol; }
    if (this.model.isNew()) { this.state = "edit"; }
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click input.btn": "submitForm",
    "dblclick .post-title": "toggleShow",
    "dblclick .post-body": "toggleCondense",
    "click button.edit": "toggleEdit"
  },

  render: function () {
    var content = this.template()({
      model: this.model
    });
    this.$el.html(content);
    return this;
  },

  submitForm: function (event) {
    event.preventDefault();
    var formData = this.$("form").serializeJSON().post;
    debugger
    this.model.save(formData, {
      success: this._saveSuccess.bind(this),
      errors: this._saveErrors.bind(this)
    });
  },

  toggleEdit: function () {
    this.state = "edit";
    this.render();
  },

  toggleShow: function () {
    this.state = "show";
    this.render();
  },

  toggleCondense: function () {
    this.state = null;
    this.render();
  },

  _saveErrors: function (model, response) {
    var errorField = this.$("ul.form-errors").empty();
    JSON.parse(response.responseText).forEach(function (errorText) {
      var msg = $("<li>").html(errorText);
      errorField.append(msg);
    });
  },

  _saveSuccess: function () {
    this.toggleShow();
  },
});
