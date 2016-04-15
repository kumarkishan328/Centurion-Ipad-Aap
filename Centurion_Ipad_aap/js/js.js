(function ($) {
    // Detect touch support
    $.support.touch = 'ontouchend' in document;
    // Ignore browsers without touch support
    if (!$.support.touch) {
    return;
    }
    var mouseProto = $.ui.mouse.prototype,
        _mouseInit = mouseProto._mouseInit,
        touchHandled;

    function simulateMouseEvent (event, simulatedType) { //use this function to simulate mouse event
    // Ignore multi-touch events
        if (event.originalEvent.touches.length > 1) {
        return;
        }
    event.preventDefault(); //use this to prevent scrolling during ui use

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
        simulatedType,    // type
        true,             // bubbles                    
        true,             // cancelable                 
        window,           // view                       
        1,                // detail                     
        touch.screenX,    // screenX                    
        touch.screenY,    // screenY                    
        touch.clientX,    // clientX                    
        touch.clientY,    // clientY                    
        false,            // ctrlKey                    
        false,            // altKey                     
        false,            // shiftKey                   
        false,            // metaKey                    
        0,                // button                     
        null              // relatedTarget              
        );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
    }
    mouseProto._touchStart = function (event) {
    var self = this;
    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
        return;
        }
    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;
    // Track movement to determine if interaction was a click
    self._touchMoved = false;
    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');
    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
    };

    mouseProto._touchMove = function (event) {
    // Ignore event if not handled
    if (!touchHandled) {
        return;
        }
    // Interaction was not a click
    this._touchMoved = true;
    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
    };
    mouseProto._touchEnd = function (event) {
    // Ignore event if not handled
    if (!touchHandled) {
        return;
    }
    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');
    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');
    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {
      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }
    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
    };
    mouseProto._mouseInit = function () {
    var self = this;
    // Delegate the touch handlers to the widget's element
    self.element
        .on('touchstart', $.proxy(self, '_touchStart'))
        .on('touchmove', $.proxy(self, '_touchMove'))
        .on('touchend', $.proxy(self, '_touchEnd'));

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
    };
})(jQuery);





$(document).ready(function(){
	
		
function resizeBoxes() {
		
	var browserWidth = $(window).width();
	var browserHeight = $(window).height();
		
	$('#main').css({
		width: browserWidth*6,
	});
		
		
	$('.box').css({
		width: browserWidth,
		height: browserHeight,
	});
		
}
		
resizeBoxes();
		
$(window).resize(function() {
	resizeBoxes();
});


$('nav ul li a, a').click(function(){
	return false;
});

function goTo(horizontal,vertical) {

	var browserWidth = $(window).width();
	var browserHeight = $(window).height();
	console.log(browserWidth*horizontal +':'+browserHeight*vertical);

	$('#main').animate({
		marginLeft: '-'+browserWidth*horizontal,
		marginTop: '-'+browserHeight*vertical,
	}, 'fast', 'easeOut');
	
}


$('.home a').click(function(){
	goTo(0,0);
});


$('.about a').click(function(){
	goTo(1,0);
});


$('.travel a').click(function(){
	goTo(2,0);
});

$('.travel_lifestyle a').click(function(){	
	goTo(2,0);
	goTo(3,0);
});

$('.travel_service a').click(function(){
	goTo(2,0);
	goTo(4,0);
});

$('.travel_service1 a').click(function(){
	goTo(2,0);
	goTo(5,0);
});


$('.travel_elite a').click(function(){
	goTo(2,1);	
});

$('.travel_meet a').click(function(){
	goTo(2,2);	
});
$('.lounge_access a').click(function(){
	goTo(2,3);	
});

$('.airline_privileges a').click(function(){
	goTo(2,4);	
});

$('.hotel_privileges a').click(function(){
	goTo(2,5);	
});

$('.private_jet a').click(function(){
	goTo(2,5);	
});

$('.private_jet a').click(function(){
	goTo(2,6);	
});


$('.lifestyle a').click(function(){
	goTo(3,0);
});

$('.lifestyle_travel a').click(function(){
	goTo(3,0);
	goTo(2,0);
});


$('.lifestyle_service a').click(function(){
	goTo(3,0);
	goTo(4,0);
});


$('.lifestyle_service1 a').click(function(){
	goTo(3,0);
	goTo(5,0);
});

$('.centurion_reserved a').click(function(){
	goTo(3,1);
});

$('.centurion_golf a').click(function(){
	goTo(3,2);
});

$('.centurion_invites a').click(function(){
	goTo(3,3);
});


$('.service a').click(function(){
	goTo(4,0);
});

$('.service_travel a').click(function(){
	goTo(4,0);
	goTo(2,0);
});

$('.service_lifestyle a').click(function(){
	goTo(4,0);
	goTo(3,0);
});

$('.service_service1 a').click(function(){
	goTo(4,0);
	goTo(5,0);
});


$('.service1_travel a').click(function(){
	goTo(5,0);
	goTo(2,0);
});

$('.service1_lifestyle a').click(function(){
	goTo(5,0);
	goTo(3,0);
});

$('.service1_service a').click(function(){
	goTo(5,0);
	goTo(4,0);
});



$('.relationship_1 a').click(function(){
	goTo(4,1);
});

$('.centurion_rewards a').click(function(){
	goTo(4,2);
});


$('.service1 a').click(function(){
	goTo(5,0);
});

$('.membership_reward_3 a').click(function(){
	goTo(5,1);
});



$('.box, .wrapper').swipe({
    swipeLeft: function() { alert('Swipe Left'); },
    swipeRight: function() { $('.home a').trigger('click');},
});
		


/****** POPUP js ***/
$('.close, .closer, .histnon_close, .hotels_close_3, .oberoi_close').click(function(){
	$('.popup').css({'display':'none'});
});


$('.hilton-honors-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.hilton-honors').css({'display':'block'});
});

$('.relais-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.relais').css({'display':'block'});
});

$('.highest-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.highest').css({'display':'block'});
});


$('.club-itc-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.club-itc').css({'display':'block'});
});

$('.starwood-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.starwood').css({'display':'block'});
});

$('.le-clib-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.le-clib').css({'display':'block'});
});

$('.club-carson-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.club-carson').css({'display':'block'});
});

$('.cathay-pacific-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.cathay-pacific').css({'display':'block'});
});

$('.emirates-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.emirates').css({'display':'block'});
});

$('.lounge-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.lounge').css({'display':'block'});
});

$('.lounge-pass-a').click(function(){		
	$('.popup').css({'display':'none'});
	$('.lounge-pass').css({'display':'block'});
});

$('.lounge-cathay-pacific-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.lounge-cathay-pacific').css({'display':'block'});
});

$('.lounge-emirates-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.lounge-emirates').css({'display':'block'});
});

$('.fine-hotols-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.fine-hotols').css({'display':'block'});
});

$('.oberoi-hotels-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.oberoi-hotels').css({'display':'block'});
});

$('.partner-logo-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.partner-logo').css({'display':'block'});
});


$('.the-leela-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.the-leela').css({'display':'block'});
});

$('.the-group-a').click(function(){
	$('.popup').css({'display':'none'});
	$('.the-group').css({'display':'block'});
});

$('.next-a').click(function(){
	$(this).parent().hide();
	$(this).parent().next().show();
});

$('.prev-a').click(function(){
	$(this).parent().hide();
	$(this).parent().prev().show();
});


$('.next_slider-a').click(function(){
	$(this).parent().hide();
	$(this).parent().next().show();
});

$('.next_slider_1-a').click(function(){
	$(this).parent().hide();
	$(this).parent().next().show();
});

$('.prev_1-a').click(function(){
	$(this).parent().hide();
	$(this).parent().prev().show();
});


});