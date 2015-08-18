DbAlpha.Views.GuestLogin = Backbone.View.extend({
  initialize: function (options) {
    var guestBtn = $("<div>");
    this.$el.append(guestBtn);
    guestBtn.addClass("btn btn-success btn-guest").html("Guest Login");

    this.email = "guest_login@dbalpha.info";
    this.password = "GuestPassword";
    this.$email_field = this.$("#user_email");
    this.$password_field = this.$("#user_password");
  },

  events: {
    "click .btn-guest": "_guestLogin"
  },

  _autoClick: function () {
    this.$("button").click();
  },

  _guestLogin: function (event) {
    this.$email_field.val("");
    this.$password_field.val("");
    this._slowEntry(this.$email_field, this.email, this._inputPassword.bind(this));
  },

  _inputPassword: function () {
    this._slowEntry(this.$password_field, this.password, this._autoClick.bind(this));
  },

  _slowEntry: function ($el, str, callback) {
    var entry = setInterval(function () {
      $el.val( $el.val() + str[0] );
      str = str.substr(1);
      if (!str) {
        clearInterval(entry);
        callback();
      }
    }, 50);
  }
});
