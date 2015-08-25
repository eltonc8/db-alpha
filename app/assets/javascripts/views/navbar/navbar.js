DbAlpha.Views.Navbar = Backbone.CompositeView.extend({
  template: JST["navbar/navbar"],
  templateForm: JST["user/user_form"],

  events: {
    "click .sign-up": "signUp"
  },

  signUp: function (event) {
    event.preventDefault();
    bootbox.dialog({
      title: "Sign Up!",
      message: this.templateForm({}),
      buttons: {
        success: {
          label: "Sign Up!",
          callback: this._signUp.bind(this)
        }
      }
    });
  },

  render: function () {
    var content = this.template();
    this.$el.html( content );
    return this;
  },

  _signUp: function (event) {
    var formData = $("form.user-form").serializeJSON().user;
    DbAlpha.Models.user = DbAlpha.Models.user || new Dbalpha.Models.user();
    DbAlpha.Models.user.save(formData, {
      success: this._signUpSuccess.bind(this),
      error: this._signUpError.bind(this)
    });
  },

  _signUpError: function (model, response) {
    debugger
    this.signUp();
  },

  _signUpSuccess: function (model, response) {
    debugger
    this.signUp();
  },
});

DbAlpha.Views.navbar = new DbAlpha.Views.Navbar();
