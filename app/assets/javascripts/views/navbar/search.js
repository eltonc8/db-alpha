DbAlpha.Views.SearchBar = Backbone.View.extend({
  events: {
    "keydown input": "processKeypress"
  },

  processKeypress: function (event) {
    if (event.keyCode === 13) {
      var fieldData = this.$("input").val();
      Backbone.history.navigate("securities/" + fieldData, {trigger: true});
    }
  }
});
