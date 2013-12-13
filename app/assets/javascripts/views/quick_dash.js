Tumblr.Views.QuickView = Backbone.View.extend({
  initialize: function(){
    this.addHandlers();
    this.textView = new Tumblr.Views.TextView();

  },

  events: {
    'click quickitem': 'postForm'
  },

  addHandlers: function() {
    var that = this;
    $('quickitem').on('click', function(e){
      that.postForm(e);
    });
  },

  postForm: function(e) {
    this.hideShow($('quickdashbubble'),$('textpostform'),400);

    console.log(e);
  }
});