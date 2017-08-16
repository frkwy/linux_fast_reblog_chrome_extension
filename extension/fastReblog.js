window.addEventListener("keydown", function(event) {
    if (event.keyCode == 84 && Tumblr.KeyCommands.logged_in) {
        for (s in Tumblr.KeyCommands.post_positions) 
            Tumblr.KeyCommands.fast_reblog(s, Tumblr.KeyCommands.post_positions[s], !1); 
      }
      Tumblr.Events.trigger("keycommands:fast_reblog");
      return false;
});
