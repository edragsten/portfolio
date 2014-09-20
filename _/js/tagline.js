(function($){
    $(function(){
       
    var animation_speed = 500;
 
    if ($('body').hasClass("slide-vertical")) {
      var tid = setInterval(tagline_vertical_slide, 2500);
    }
    else {
      var tid = setInterval(tagline_fade, 2500);
    }
 
    // fade style
    function tagline_fade() {
      var curr = $("h3.welcome span a.active");
      curr.removeClass("active");
      var nextTag = curr.next('a');
      if (!nextTag.length) {
        nextTag = $("h3.welcome span a").first();
      } 
      nextTag.addClass("active");
    }
 
    // vertical slide
    function tagline_vertical_slide() {
      var curr = $("h3.welcome span a.active");
      curr.removeClass("active").addClass("vs-out");
      setTimeout(function(){
        curr.removeClass("vs-out");
      }, animation_speed);
 
      var nextTag = curr.next('a');
      if (!nextTag.length) {
        nextTag = $("h3.welcome span a").first();
      } 
      nextTag.addClass("active");
    }
 
    function abortTimer() { // to be called when you want to stop the timer
      clearInterval(tid);
    }
 
 
    }); // end of document ready
})(jQuery); // end of jQuery name space