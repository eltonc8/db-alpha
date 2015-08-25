DbAlpha.Views.GuestLogin = Backbone.View.extend({
  initialize: function (options) {
    this.username = "guest_login@dbalpha.info";
    this.password = "GuestPassword";
    this.$username_field = this.$("#user_username");
    this.$password_field = this.$("#user_password");
  },

  events: {
    "click .btn-guest": "_guestLogin"
  },

  _autoClick: function () {
    $(".btn-sign-in").click();
    this.off();
  },

  _guestLogin: function (event) {
    this.$username_field.val("");
    this.$password_field.val("");
    this._slowEntry(this.$username_field, this.username, this._inputPassword.bind(this));
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
