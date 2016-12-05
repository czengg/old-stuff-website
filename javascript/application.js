//EVENT LISTENERS

$(document).ready($(".motto").css("opacity","1"));

//NAME
$(".name").on("click",function(){
	window.location = "/home"
});

//SOCIAL MEDIA
$("#facebook").on("click",function() {
		url = "https://www.facebook.com/cindy.zeng.9";
		window.open(url,"_blank");
	});

$("#linkedin").on("click",function() {
		url = "http://www.linkedin.com/profile/view?id=229921382";
		window.open(url,"_blank");
	});

$("#twitter").on("click",function() {
		url = "https://twitter.com/czengg";
		window.open(url,"_blank");
	});

$("#email").on("click",function() {
	window.location.href = "mailto:czeng@andrew.cmu.edu";
});

//WELCOME
$("#welcome").on("click",function() {
    $("#welcome").css("display","none");
	$(".projects").removeClass("clickme");
	$(".motto-end").css("opacity","0");
	$(".motto-end").attr("hidden","true");

	$(".nav").hover( function() { 
					$(this).css("color","#D21D52");
					$(this).css("cursor","pointer");
				}, function() {
					$(this).css("color","#4BB3CB");
					$(this).css("cursor","default");
				})

	$("#bio").css("display","block");
});

//NAV BAR
$(".design").on("click",function() {
    var hidden = $(".motto-end").attr("hidden");

	if(hidden !== undefined) {
		$("#bio").css("display","none");
        $("#code").css("display","none");
        $("#do").css("display","none");
        $("#design").css("display","block");

		$(".go-top").trigger("click");
    }
});
                
$(".code").on("click",function() {
    var hidden = $(".motto-end").attr("hidden");

	if(hidden !== undefined) {
		$("#bio").css("display","none");
        $("#design").css("display","none");
        $("#do").css("display","none");
        $("#code").css("display","block");

		$(".go-top").trigger("click");
    }
});
                
$(".do").on("click",function() {
    var hidden = $(".motto-end").attr("hidden");

	if(hidden !== undefined) {
		$("#bio").css("display","none");
        $("#code").css("display","none");
        $("#design").css("display","none");
        $("#do").css("display","block");

		$(".go-top").trigger("click");
    }
});



//GO TOP
$(".go-top").on("click",function(event) {
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

function toggle(id) {
    var div = $("#"+id);
    if(div.css("display") == "none") {
        div.slideDown();
    }
    else {
        div.slideUp();
    }
}

//BILLBOARD NAV STICKY 
var billboard = $(".billboard");
$(window).scroll(function() {
    if($(document).width()<600 && $(window).scrollTop()>=200) {
        billboard.css("top","0px");
        billboard.css("position","fixed");
        billboard.css("background-color", "white");
    }
    else if($(document).width()<600) {
        billboard.css("top","200px");
        billboard.css("position","absolute");
        billboard.css("background-color", "transparent");
    }
    else {
        billboard.css("top","0px");
        billboard.css("position","fixed");
        billboard.css("background-color", "transparent");
    }
});

$(window).resize(function() {
    $(window).trigger("scroll");
});
