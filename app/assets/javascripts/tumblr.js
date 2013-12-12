window.Tumblr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    Tumblr.user = new Tumblr.Models.User();

    Tumblr.papaEl = $('papael');
    Tumblr.router = new Tumblr.Routers.Main();
    Tumblr.userPosts = new Tumblr.Collections.Posts();
    Tumblr.userPosts.fetch({
      success: function(){
        $.post('/sessions', function(resp){
          Tumblr.user.set(resp.user);
          Tumblr.router.posts();
        });
      },
      error: function(){
        Tumblr.router.login();
      }
    });
  }
};

$(document).ready(function(){
  Tumblr.initialize();
});