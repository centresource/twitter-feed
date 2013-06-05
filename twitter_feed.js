(function($) {
  Drupal.behaviors.MYMODULE = {
    attach: function (context, settings) {
      var screen_name = Drupal.settings.twitter_feed.screen_name;
      var tweet_count = Drupal.settings.twitter_feed.tweet_count;
      // screen_name = false;

      if (screen_name) {
        $(document).ready(function(){
          $.getScript(Drupal.settings.twitter_feed_path.path + '/blogger.js', function(){
            $.getScript('https://api.twitter.com/1/statuses/user_timeline.json?callback=twitterCallback2&screen_name=' + screen_name + '&count=' + tweet_count);
          });
        });
      };
    }
  };


})(jQuery);
