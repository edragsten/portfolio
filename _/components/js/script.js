// Animated tagline
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


// Project view
(function() {
	var triggerBttn = document.getElementById( 'munch' ),
		arbeid = document.querySelector( 'div.arbeid' ),
		closeBttn = overlay.querySelector( 'button.lukk' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function viewMunch() {
		if( classie.has( arbeid, 'active' ) ) {
			classie.remove( arbeid, 'active' );
			classie.add( arbeid, 'unactive' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( arbeid, 'unactive' ) ) {
			classie.add( arbeid, 'active' );
		}
	}
 
	triggerBttn.addEventListener( 'click', viewMunch );
	closeBttn.addEventListener( 'click', viewMunch );
    overlay.addEventListener( 'click', viewMunch );
})();
