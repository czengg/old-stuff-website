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
	if(guess == "shark") {
		$("#letter").attr("onclick","letter()");
		$("#notes").attr("onclick","notes()");
		photo();
	}
	else {
		$("#incorrect").text("You do not have access to this.");
	}
}

function photo() {
	$("#notes-content").empty();
	$("#notes-name").text("| a thousand words");

	$("#notes-content").append("<img src='../images/dolphinFetus.jpg'>");
}

function letter() {
	$("#notes-content").empty();
	$("#notes-name").text("| semester's beginning");

	$("#notes-content").append("<p>January 11, 2013</p>");
	$("#notes-content").append("<p id='imp'>Dear Dolphin Fetus,</p>");
	$("#notes-content").append("<p>In high school, I used to read fanfictions. It was all very embarrassing, but one thing did stick with me from the dozens of amateur stories I read: One of the characters melodramatically makes his exit. He kisses his lover and says, <i>'This is not goodbye, but see you later'</i>. It all seems less genius now, but I thought you'd like that. Or not. I guess the point is, <em>this isn't goodbye</em>. It feels this way now as I'm sure we're both <b>crying our eyes out</b>. It'll be different, sure. But change can be good, right? </p>");
	$("#notes-content").append("<p>I guess I should stop pretending like I'm not affected by your imminent graduation. I type this in a cramped airplane on my way to Pittsburgh for our last semester together, knowing in the privacy of my room, <b>the tears won't stop</b>. Moments like this, I wish I could be even a fifth of what you are. I want to tell you so badly how much you're worth it, how much your insecurities baffle me. There are so many things I'd like to say, if I was more brave, more outspoken, more so many qualities that you possess.</p>");
	$("#notes-content").append("<p><em>You amaze me everyday.</em> I still remember that day when we came to your design exhibit, standing there in awe of you, of your work and all you've accomplished. Just knowing you made me feel so proud. You said once that you've lacked discipline all your life, but that can't be true. Beautiful finished products like Peach Fuzz don't come from undisciplined people. <b>You should give yourself more credit.</b> </p>");
	$("#notes-content").append("<p>You and I. We're so alike, yet so different. It's strange. You're stronger than I am, stronger than I could ever be. I'm a cynic. I'm a quitter. But you, despite everything, still hope and expect in ways that I wish that I could, in ways that I envy. You laugh. You cry. <b>You experience life.</b> And I know sometimes you feel like your life is a shitshow, but you always get through it. You're the most perceptive person I know, the most steadfast in her beliefs, the most loyal, and the sassiest.</p>");
	$("#notes-content").append("<p>I look at our family and I can only see a hole that can only be filled by you. <em>We need you and you belong.</em> And I'm so glad that you're in our family. Those google hangouts with you in the hotel restroom. Those late nights in gates eating chocolate pretzels. Sitting in Kappa living room, sharing. <i>All those things are what I'll remember when you guys go.</i> Things will be different. Next year, I'll be a junior, empty with only the memories of the best group of people I've ever meet. And for a while, <b>it's not going to feel okay</b>. But we can still google hangout in our restrooms. We can still take weekend vacations all across the nation to each other. </p>");
	$("#notes-content").append("<p><em>When you go, I won't be losing just my family or friends, but my home. </em></p>");
	$("#notes-content").append("<p id='end'>Sincerely, the one always in your corner</p>");
}

function notes() {
	$("#notes-content").empty();
	$("#notes-name").text("| notes");

	$("#notes-content").append("<p id='imp'>\"Tell me something about yourself.\"</p>");
	$("#notes-content").append("<p>I remember asking in that small conference room in Gates. And you did. You told me about your mom and sophomore year, about Kevin and being an OC, about freshman year and now, about how you felt, about...life. And I told you about my parents and high school senior year, about CMU and boys, about cancer, about...life. I will never forget that night, sitting in that cramp room, pretending to study. That was the night <b>we became family</b>. The night we <i>poured our hearts</i> out to each other. The night where it was okay to talk about the bad things that had happened, to feel sad yet happy to share it with someone...you.</p>");
	$("#notes-content").append("<p>I remember thinking how <b>strong you were</b>, how different my impressions of you had been. I know you somehow think that you don't care, but you do...so much more than most people I know. <em>You should give more credit to yourself.</em> You're one of the strongest people I know. Sometimes it gets hard for me, being in school and getting treatment. But then I just think about how you went through all that with your mom and it keeps me going. It <i>inspires me</i> to stay motivated and not quit. Because if I can even be <b>half as strong</b> as you are? I\'d be ecstatic.</p>");
	$("#notes-content").append("<p>Whenever I think about all the times that we've spent together, the late-night talks and venting sessions, the many dinner runs to different restaurants, or the moments where we just all sat downstairs and sassed each other, my heart fills up with <b>happiness and joy</b>. Because I never told you guys, but you saved me at a time in my life where I was drowning in unhappiness; <em>you were my lifesavers</em>. And when I think back to all the highs of this past year, I can only think of <b>our troll family</b>.</p>");
	$("#notes-content").append("<p>For the longest time, I didn't have a family. I'd never felt what it feels to love and be loved in a such a way, unconditional. <em>That's what you have taught and given me.</em> </p>");
	$("#notes-content").append("<p id='end'>You are so much more amazing than you could ever know.</p>");
}

// $("#notes-content").append("<p></p>");