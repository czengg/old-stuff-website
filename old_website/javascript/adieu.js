$("#notes-content").load(hello());

function youtubeEmbed(link) {
	var iframe = $("<iframe></iframe>");
	iframe.attr("width","420");
	iframe.attr("height","315");
	iframe.attr("src",link);
	iframe.attr("frameborder","0");
	iframe.attr("allowfullscreen");

	return iframe;
}

function video() {
	$("#notes-content").empty();
	$("#notes-name").text("| come what may");
	$("#notes-content").append(youtubeEmbed("http://www.youtube.com/embed/SoWo-y63OVs"));
	// $("#notes-content").append("<p><a href='http://www.youtube.com/watch?v=SoWo-y63OVs'>Look at the Youtube description for more details.</a></p>");
	$("#notes-content").append("<p>I wrote this song for you guys...it sucks. <em>Don't judge me.</em> </p>");
	$("#notes-content").append("<p>(PS the beeping is my sister facetiming me during the recording...)</p>");
	$("#notes-content").append("<p>Lyrics:</p>");
	$("#notes-content").append("<p>Let it go and open up instead. </br> It's not okay to keep it bottled up, you said. </br> Holding on to all those things you've done </br>Sitting on the couch, catching up till the morning sun</br>Take me back when we had just begun</br>Before the memories fade away until there are none</p>");
	$("#notes-content").append("<p>The days keep falling behind,</br>And I'm not ready</br>for goodbye</p>");
	$("#notes-content").append("<p>So I stay here, standing behind</br>while you move to some day</br>where we'll meet there some way</br>Don't look back, follow the line</br>things aren't quite what they say</br>you'll be fine, come what may.</p>");
	$("#notes-content").append("<p>Don't you know, you're the one I'll miss the most</br>No more singing songs together to toast the host</br>We're more than gold keys and fleur de lis</br>Our love is an endless sea with no boundaries</br>We'll laugh and cry and everything in between,</br>even when there's a thousand miles from you and me.</p>");
	$("#notes-content").append("<p>The days keep falling behind,</br>And I'm not ready</br>for goodbye</p>");
	$("#notes-content").append("<p>So I stay here, standing behind</br>while you move to some day</br>where we'll meet there some way</br>Don't look back, follow the line</br>things aren't quite what they say</br>you'll be fine, come what may.</p>");
	$("#notes-content").append("<p>So close your eyes, let's follow time passing by</br>Then look outside and watch our last setting sky.</br>This infinite feeling, with your absence, it'll die,</br>The moment's ending, it's been one hell of a ride.</p>");
	$("#notes-content").append("<p id='end'>Don't go...</p>");
}

function hello() {
	$("#notes-content").empty();
	$("#notes-name").text("| hello");

	$("#notes-content").append("<p id='imp'>You are loved.</p>");
	$("#notes-content").append("<p>This is my strange love letter to you guys. On this page, you'll find links on the side for all of you. Up top is individual notes for each of you.</p>");
	$("#notes-content").append("<p id='end'>You will not be forgotten.</p>");
}

function playlist() {
	$("#notes-content").empty();
	$("#notes-name").text("| playlist");

	$("#notes-content").append("<p id='imp'>How many ways can you say goodbye?</p>");
	$("#notes-content").append("<p>Below is a playlist of songs that reminded me of you. Hover over and click to listen.</p>");
	$("#notes-content").append("<p><a href='http://open.spotify.com/user/1235138295/playlist/4uTFCwdMpQYKi51hzRp38m'>Playlist on Spotify.</a></p>");

	$("#notes-content").append("<p><a href='http://www.youtube.com/watch?v=SwAgFb-WfLA'>1. lykke li - little bit</a></br><a href='http://www.youtube.com/watch?v=77aJGzjxP68'>2. taken by trees - in other words</a></br><a href='http://www.youtube.com/watch?v=pT68FS3YbQ4'>3. the strokes - you only live once</a></br><a href='http://www.youtube.com/watch?v=r4G5TsUTxTk'>4. mat kearney - breathe in and breathe out</a></br><a href='http://www.youtube.com/watch?v=zyjVGD_Vbw0'>5. guster - i hope tomorrow is like today</a></br><a href='http://www.youtube.com/watch?v=WCMkY2ZjwPE'>6. tegan and sara - i know, i know, i know</a></br><a href='http://www.youtube.com/watch?v=jZhRSWL0UnQ'>7. coconut records - back to you</a></br><a href='http://www.youtube.com/watch?v=-DmuVLYfEoQ'>8. the shins - a comet appears</a></br><a href='http://www.youtube.com/watch?v=EcwABj_1FKA'>9. noah and the whale - the first days of spring</a></br><a href='http://www.youtube.com/watch?v=WJ_wSJ238EI'>10. laura marling - failure</a></br><a href='http://www.youtube.com/watch?v=fORAPkfVV_A'>11. ingrid michaelson - keep breathing</a></br><a href='http://www.youtube.com/watch?v=twfQ-8M1Pnk'>12. paolo nutini - million faces</a></br><a href='http://www.youtube.com/watch?v=yoAPw-eJuYo'>13. snow patrol - you could be happy</a></br><a href='http://www.youtube.com/watch?v=c_PwSKAYX94'>14. noah and the whale - blue skies</a></br><a href='http://www.youtube.com/watch?v=HoRkntoHkIE'>15. phillip phillips - home</a></br><a href='http://www.youtube.com/watch?v=vaqs3DCQTLo'>16. jjamz - you were my home</a></p>");
	$("#notes-content").append("<p id='end'>don't cry child...you've got so much more to live for</p>");
}

// $("#notes-content").append("<p><a href=''></a></p>");