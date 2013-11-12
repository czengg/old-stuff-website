

// EVENT LISTENERS

$(".name").on("click tap",function(){
	window.location = "../home"
});

$("#facebook").on("click tap",function() {
		url = "https://www.facebook.com/cindy.zeng.9";
		window.open(url,"_blank");
	});

$("#linkedin").on("click tap",function() {
		url = "http://www.linkedin.com/profile/view?id=229921382";
		window.open(url,"_blank");
	});

$("#twitter").on("click tap",function() {
		url = "https://twitter.com/czengg";
		window.open(url,"_blank");
	});

$("#email").on("click tap",function() {
	window.location.href = "mailto:czeng@andrew.cmu.edu";
});

$(".projects").mousewheel(function(event,delta){

    var div = $(this);

    var top = parseInt(div.css("top"));
    var height = $(document).height();
    var divHeight = parseInt(div.css("height"));
    var width = $(document).width();

    var prop;
    if(width > 600) {
    	prop = .2;
    }
    else {
    	prop = .45;
    }

    if (delta > 0) {
    	if(top < (prop*height)) {
        	div.css("top", parseInt(div.css("top"))+10);
    	}
    } else {
    	if((top+divHeight+(.2*height)) > height) {
        	div.css("top", parseInt(div.css("top"))-10);
    	}
    }

    if (parseInt(div.css("top")) < 0) {
        $(".go-top").fadeIn(200);
    } else {
        $(".go-top").fadeOut(200);
    }
}); 

$(window).keydown(function(event){

    var div = $(".projects");

    var top = parseInt(div.css("top"));
    var height = $(document).height();
    var divHeight = parseInt(div.css("height"));
    var width = $(document).width();

    var prop;
    if(width > 600) {
        prop = .2;
    }
    else {
        prop = .45;
    }

    if (event.keyCode == 38 || event.keyCode == 33) {
        if(top < (prop*height)) {
            div.css("top", parseInt(div.css("top"))+50);
        }
    } 
    else if(event.keyCode == 40 || event.keyCode == 34) {
        if((top+divHeight+(.2*height)) > height) {
            div.css("top", parseInt(div.css("top"))-50);
        }
    }

    if (parseInt(div.css("top")) < 0) {
        $(".go-top").fadeIn(200);
    } else {
        $(".go-top").fadeOut(200);
    }
}); 

// touch event check stolen from Modernizr
var touchSupported = (('ontouchstart' in window) ||
                        window.DocumentTouch && document instanceof DocumentTouch);

// if touch events are supported, tie our animation to the position to these events as well
if (touchSupported) {

    $(window).bind("touchstart", function(e) {
        e.preventDefault();
        var val = e.originalEvent.targetTouches[0].pageY;
        $(".projects").data("originY",val);
    })

    $(window).bind("touchmove", function(e) {

        event.preventDefault();
        var val = e.originalEvent.targetTouches[0].pageY;

        var div = $(".projects");
        var delta = val - div.data("originY");

        var top = parseInt(div.css("top"));
        var height = $(document).height();
        var divHeight = parseInt(div.css("height"));
        var width = $(document).width();

        var prop;
        if(width > 600) {
            prop = .2;
        }
        else {
            prop = .45;
        }

        if (delta > 0) {
            if(top < (prop*height)) {
                div.css("top", parseInt(div.css("top"))+30);
            }
        } else {
            if((top+divHeight+(.2*height)) > height) {
                div.css("top", parseInt(div.css("top"))-30);
            }
        }
    });
}

$(".go-top").on("click tap",function(event) {
    event.preventDefault();

    var height = $(document).height();
    var width = $(document).width();
    
    var prop;
    if(width > 600) {
        prop = .2;
    }
    else {
        prop = .45;
    }

    $(".projects").animate({top: prop*height}, 300);
});
