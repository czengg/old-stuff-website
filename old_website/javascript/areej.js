$("#notes-content").load(password());

$('form').submit(function () {
 verify();
 return false;
});

function password() {
	$("#notes-content").empty();
	$("#notes-name").text("| who are you?");

	$("#notes-content").append("<p id='imp'>Do you have access to this page?</p>");
	$("#notes-content").append("<p><em id='incorrect'></em></p>")
	$("#notes-content").append("<p>Type password below:</p>")
	$("#notes-content").append("<form><input type='password' id='guess'><input type='submit'></form>");
}

function verify() {
	var guess = $("#guess").val();
	if(guess == "falling") {
		$("#notes").attr("onclick","notes()");
		photo();
	}
	else {
		$("#incorrect").text("You do not have access to this.");
	}
}

function story() {
	$("#notes-content").empty();
	$("#notes-name").text("| our story");

}

function photo() {
	$("#notes-content").empty();
	$("#notes-name").text("| a thousand words");

	$("#notes-content").append("<img src='../images/areej.jpg'>");
}

function notes() {
	$("#notes-content").empty();
	$("#notes-name").text("| notes");

	$("#notes-content").append("<p id='imp'>The Ruzzle Champion</p>");
	$("#notes-content").append("<p>Every time I want to say something sappy to you, it feels so <b>unnatural</b>. Maybe it's because you seem to be <i>adverse to emotion</i>. <em>It's funny how embarrassed you get when you try to be sappy.</em> But anyways...here goes...</p>");
	$("#notes-content").append("<p>Honestly speaking, <i>you are the one who convinced me to stay here</i>, in a sense. Without you, I would've never told Michelle or Christina or even Sunny about my recurrence. I would've been miserable in California, getting treatment and feeling depressed. Or even worse, I would've refused to get treatment and died without knowing or feeling like I deserved a chance at life or that my life was worth me living for. So I want to thank you, first and foremost for <em>saving my life in the truest sense</em>.</p>");
	$("#notes-content").append("<p>But more than that, I want to thank you for being there when <b>I wasn't myself</b>. Those times when I could barely open my eyes, when I was terrified of the poking and prodding, when I was sick to my stomach with nausea and headaches that felt like they were killing me. And <i>I want to say sorry</i>...that you have to see me like that at all. Sometimes I think that I scare you, but <em>I think you're stronger than I give you credit for</em>.</p>");
	$("#notes-content").append("<p>And when you tell me how you think I'm one of the stronger people you know, it makes <em>my heart swell up with pride</em>. Because you don't know how much that means to me. Knowing that one of the strongest people that I know thinks I'm strong? <b>That means the world.</b> Even if I have a hard time believing it. </p>");
	$("#notes-content").append("<p>I'm so happy that you're in my life. That you're one of my best friend's bigs. That you are. You've always been Jettie's big to me, but now I think <em>you're one of my closest friends</em>.</p>");
	$("#notes-content").append("<p id='end'>You're beautiful in the truest sense of the word.</p>");

}

// $("#notes-content").append("<p></p>");