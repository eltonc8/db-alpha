DbAlpha.Views.Navbar = Backbone.CompositeView.extend({
  template: JST["navbar/navbar"],
  templateForm: JST["user/user_form"],

  events: {
    "click .sign-up": "signUp",
    "click .sign-in": "signIn",
    "click .btn-guest": "_guestLogin"
  },

  signIn: function (event) {
    event && event.preventDefault();
    DbAlpha.Models.user = DbAlpha.Models.user || new Dbalpha.Models.user();
    DbAlpha.Models.urlRoot = "/sessions";

    bootbox.dialog({
      title: "Sign In!",
      message: this.templateForm({
        model: DbAlpha.Models.user,
        signUp: false,
        errors: this._errors
      }),
      buttons: {
        main: {
          className: "btn-primary btn-sign-in",
          label: "Sign In!",
          callback: this._signIn.bind(this)
        }
      }
    });
  },

  signUp: function (event) {
    event && event.preventDefault();
    DbAlpha.Models.user = DbAlpha.Models.user || new Dbalpha.Models.user();
    DbAlpha.Models.urlRoot = "/users";

    bootbox.dialog({
      title: "Sign Up!",
      message: this.templateForm({
        model: DbAlpha.Models.user,
        signUp: true,
        errors: this._errors
      }),
      buttons: {
        main: {
          label: "Sign Up!",
          callback: this._signUp.bind(this)
        }
      }
    });
  },

  // render: function () {
  //   var content = this.template();
  //   this.$el.html( content );
  //   return this;
  // },

  _signIn: function (event) {
    event.preventDefault();
    var formData = $("form.user-form").serializeJSON().user;
    DbAlpha.Models.user.urlRoot = "/session";

    DbAlpha.Models.user.save(formData, {
      success: this._success.bind(this),
      error: this._signInError.bind(this)
    });
  },

  _signUp: function (event) {
    event.preventDefault();
    var formData = $("form.user-form").serializeJSON().user;
    DbAlpha.Models.user.urlRoot = "/users";

    if (!formData.password || formData.password.length < 6) {
      this._errors = ["Password must be 6 characters or longer."];
      this.signUp();
    } else if (formData.password !== formData.password_repeat) {
      this._errors = ["Password Mismatch, please try again."];
      this.signUp();
    } else {
      delete formData.password_repeat;
      DbAlpha.Models.user.save(formData, {
        success: this._success.bind(this),
        error: this._signUpError.bind(this)
      });
    }
  },

  _signInError: function (model, response) {
    this._errors = JSON.parse( response.responseText );
    this.signIn();
  },

  _signUpError: function (model, response) {
    this._errors = JSON.parse( response.responseText );
    this.signUp();
  },

  _success: function (model, response) {
    debugger
  },
});


DbAlpha.Views.navbar = new DbAlpha.Views.Navbar();
