DbAlpha.Views.Navbar = Backbone.CompositeView.extend({
  template: JST["navbar/navbar"],
  templateForm: JST["user/user_form"],

  events: {
    "click .sign-up": "signUp"
  },

  signUp: function (event) {
    event && event.preventDefault();
    DbAlpha.Models.user = DbAlpha.Models.user || new Dbalpha.Models.user();

    bootbox.dialog({
      title: "Sign Up!",
      message: this.templateForm({
        model: DbAlpha.Models.user,
        signUp: true,
        errors: this._errors
      }),
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
    event.preventDefault();
    var formData = $("form.user-form").serializeJSON().user;

    if (!formData.password || formData.password.length < 6) {
      this._errors = ["Password must be 6 characters or longer."];
      this.signUp();
    } else if (formData.password !== formData.password_repeat) {
      this._errors = ["Password Mismatch, please try again."];
      this.signUp();
    } else {
      delete formData.password_repeat;
      DbAlpha.Models.user.save(formData, {
        success: this._signUpSuccess.bind(this),
        error: this._signUpError.bind(this)
      });
    }
  },

  _signUpError: function (model, response) {
    this._errors = JSON.parse( response.responseText );
    this.signUp();
  },

  _signUpSuccess: function (model, response) {
    this.signUp();
  },
});

DbAlpha.Views.navbar = new DbAlpha.Views.Navbar();
