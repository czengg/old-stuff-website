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
	if(guess == "placenta") {
		$("#meeting").attr("onclick","meeting()");
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

	$("#notes-content").append("<img src='../images/bigster.jpg'>");
}

function meeting() {
	$("#notes-content").empty();
	$("#notes-name").text("| words unsaid");

	$("#notes-content").append("<p>You weren't there during formal meeting, so you didn't get to hear what I had Michelle say. Here it is, in so many words: </p>");
	$("#notes-content").append("<p>You are a reminder to me that <i>there are genuinely good people in the world</i>. Whenever I think of you, I just think of <b>warmth</b>, like a feeling of comfort and safety. You're not leaving, but I'll still miss seeing you every week in meeting (when you're here). I'll miss getting Razzy at 11:45pm before an all-nighter. But most of all, <em>I'll miss your warmth</em>. I want you to know you're one of the many people who gets me through sometimes.</p>");
	$("#notes-content").append("<p id='imp'>You're going to make a great doctor.</p>");

}

function notes() {
	$("#notes-content").empty();
	$("#notes-name").text("| notes");

	$("#notes-content").append("<p id='imp'>You are one of the most important people in my life.</p>");
	$("#notes-content").append("<p>Whenever I think of you, I just smile knowing that you exist and that I somehow had the great fortune of meeting you and being your lilster. </p>");
	$("#notes-content").append("<p>Freshman year, <i>you were the mentor I never had</i>. You were there to guide me and help me through all my stupidity and greenness. Even though I was never that close to Steph, I still felt so lucky being in the same family as you. <b>You were the reason I'm still in Kappa today.</b> You are why when I think of our family, I feel like it's just...<em>perfection</em>.</p>");
	$("#notes-content").append("<p>Sometimes, through all of this, <b>it gets hard</b> and I feel like giving up or being really sad. But then I think about all the people who are supporting me and helping me through this. And one of the first people to pop into my head is you. With you, I never feel anything but <i>joy and happiness</i>, even if I'm getting my heart checked out and need an IV or lying in a hospital bed and nauseous. <em>You make everything feel better somehow.</em></p>");
	$("#notes-content").append("<p>And even though I know that you're still going to be here next year, <em>it feels different</em>. Like not being able to bump into you on campus or see you every week for meeting will be hard. And sometimes I think about how everything is changing and my heart feels like <b>there's a thousand pounds of weights piled and it's ready to explode from all the pressure and pain</b>. But then I remember that I can still call you or text you or ask you to get Razzy and I breathe and the pressure slowly <i>lessens</i>.</p>");
	$("#notes-content").append("<p>And I hope you know just how much you mean to me. More than all the stars in the sky. The moon and the sun. <em>More than all the blood that pumps through my veins and every cell in my small, feeble body.</em> You mean more to me than most things in the world, if not all. Know that. Trust that.</p>");
	$("#notes-content").append("<p id='end'>When the world become too hard, you were there.</p>");

}

// $("#notes-content").append("<p></p>");