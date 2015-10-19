DbAlpha.Views.Post = Backbone.View.extend({
  tagName: "li",
  className: "post-list-item article-list-item",

  template: function () {
    if (this._state === "edit") { return JST['post/post_form']; }
    return JST['post/post_list_item'];
  },

  initialize: function (options) {
    this._state = this.model.isNew() ? "edit" : "condensed"
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click input.post-submit": "submitForm",
    "click button.post-delete": "deleteForm",
    "click .post-list-body": "toggleShow",
    "dblclick .post-list-body": "toggleCondense",
    "click button.edit": "toggleEdit"
  },

  deleteForm: function (event) {
    event.preventDefault();

    bootbox.confirm(
      "Are you sure you wish to delete your post " + this.model.escape("title") + "?",
      this._deleteConfirmed.bind(this)
    );
  },

  render: function () {
    var content = this.template()({
      model: this.model
    });
    this.$el.html(content);
    this._state == "condensed" ? this.$el.addClass("condensed") : this.$el.removeClass("condensed");
    return this;
  },

  submitForm: function (event) {
    event.preventDefault();
    var formData = this.$("form").serializeJSON().post;
    if (formData.shared_with) formData.shared_with = formData.shared_with.join(",");
    this.model.set(formData);
    this.model.save({}, {
      success: this._saveSuccess.bind(this),
      error: this._saveError.bind(this)
    });
  },

  toggleEdit: function () {
    this._state = "edit";
    this.render();
  },

  toggleShow: function () {
    this._state = "show";
    this.$el.removeClass("condensed");
  },

  toggleCondense: function () {
    if (this._state === "edit") { return; }
    this._state = "condensed";
    this.$el.addClass("condensed");
  },

  _deleteConfirmed: function (confirmation) {
    if ( !confirmation ) return;
    if ( this.model.isNew() ) { this._deleteSuccess(); }
    else {
      this.model.destroy({
        success: this._deleteSuccess.bind(this)
      });
    }
  },

  _deleteSuccess: function () {
    this.collection.remove(this.model);
  },

  _saveError: function (model, response) {
    var errorField = this.$("ul.form-error").empty();
    JSON.parse(response.responseText).forEach(function (errorText) {
      var msg = $("<li>").html(errorText);
      errorField.append(msg);
    });
  },

  _saveSuccess: function () {
    this.toggleShow();
    this.render();
  },
});
