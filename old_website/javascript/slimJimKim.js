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
	if(guess == "handhearts") {
		$("#story").attr("onclick","story()");
		$("#third").attr("onclick","third()");
		$("#letter").attr("onclick","letter()");
		$("#support").attr("onclick","support()");
		$("#notes").attr("onclick","notes()");
		story();
	}
	else {
		$("#incorrect").text("You do not have access to this.");
	}
}

function story() {
	$("#notes-content").empty();
	$("#notes-name").text("| our story");

	$("#notes-content").append("<img src='../images/theBeatles.jpg' class='slimjim'>");
	$("#notes-content").append("<span> </span>");
	$("#notes-content").append("<img src='../images/pho.jpg' class='slimjim'>");
	$("#notes-content").append("<span> </span>");
	$("#notes-content").append("<img src='../images/pictionary.jpg' class='slimjim'>");
	
	$("#notes-content").append("<img src='../images/hugs.jpg' class='slimjim'>");
	$("#notes-content").append("<span> </span>");
	$("#notes-content").append("<img src='../images/Norbit.jpg' class='slimjim'>");
	$("#notes-content").append("<span> </span>");
	$("#notes-content").append("<img src='../images/hips.jpg' class='slimjim'>");

	$("#notes-content").append("<img src='../images/handheart.jpg' class='slimjim'>");
	$("#notes-content").append("<span> </span>");
	$("#notes-content").append("<img src='../images/mr.jpg' class='slimjim'>");
	$("#notes-content").append("<span> </span>");
	$("#notes-content").append("<img src='../images/coke.jpg' class='slimjim'>");
	
	$("#notes-content").append("<img src='../images/gangsta.jpg' class='slimjim'>");
	$("#notes-content").append("<span> </span>");
	$("#notes-content").append("<img src='../images/paula.jpg' class='slimjim'>");
	$("#notes-content").append("<span> </span>");
	$("#notes-content").append("<img src='../images/five.jpg' class='slimjim'>");
}

function photo() {
	$("#notes-content").empty();
	$("#notes-name").text("| a thousand words");

	$("#notes-content").append("<img src='../images/slimJimKim.jpg'>");
}

function third() {
	$("#notes-content").empty();
	$("#notes-name").text("| the third quarter");

	$("#notes-content").append("<p>April 14, 2013</p>");
	$("#notes-content").append("<p id='imp'>Dear Slim Jim Kim,</p>");
	$("#notes-content").append("<p>So much has happened since the last time I wrote a letter to you. Our last semester together has been quite a mixed bag of <i>unpredictable happenings and fortunate events</i>. At the beginning of this semester, I was the most <b>closed off panda</b>. Not because I didn't trust you or anyone else, but <em>I didn't want to hurt people</em>. And though my intentions have always been good in regards to my friends, family and especially you, sometimes it doesn't work out.</p>");
	$("#notes-content").append("<p>Perhaps the most eye-opening thing this semester is just how easy it is for me to open up to you. Really, it should be a surprise, because you are perhaps <em>the single person I feel the most comfortable with</em>. You are the one I want to share the good and the bad. And it feels like you know just what to say to put things into perspective or make me feel better. In a way, every time something happens in my life, <b>you are the one turn to</b>, even more so than before.</p>");
	$("#notes-content").append("<p><em>I never want to disappoint you.</em> I never want to make you upset. I wish that I could just spend everyday going to Columbus and visiting you. Living with you. Being around you. Because even though you aren't that far away, <b>those couple of miles feel like millions</b>. </p>");
	$("#notes-content").append("<p id='end'>Sincerely, already missing you</p>");

}

function letter() {
	$("#notes-content").empty();
	$("#notes-name").text("| semester's beginning");

	$("#notes-content").append("<p>January 11, 2013</p>");
	$("#notes-content").append("<p id='imp'>Dear Slim Jim Kim,</p>");
	$("#notes-content").append("<p><b>This is it.</b> The see-you-later. The farewell. The adieu that we've been dreading since the day we met. I type this in a cramped airplane, flying into Pittsburgh for our final semester together. It's the only way that I can think or write about this while still keeping the tears at bay. <em>I know, a semester is a long time, but it's also so short.</em> Now, we're at the beginning, at least at the time I write this letter, but tomorrow, you'll be on that stage, getting the diploma you so deserve. And you don't know how proud I'll be no matter where I physically am.</p>");
	$("#notes-content").append("<p>I have a hard time expressing myself in words spoken. <b>There's a lot of things I just can't bring myself to physically say.</b> <em>So this is my love letter to you.</em> These are the words that I will myself to have the courage to say, but never can. </p>");
	$("#notes-content").append("<p>You're my most favorite person in the entire world, the person I look to for advice, the one I look for whenever I feel sad, happy, confused, or any emotion. <em>You're the one that I'll miss the most with all my heart and soul.</em> You're the big sister that my actual sister never was. And I am thankful and appreciative for <i>every single minute of every single day</i> that I get to spend with you. I don't think you'll ever know just how much <b> love you</b>. To be honest, I sometimes have a hard time believing how much <b>I'm attached to you</b>.</p>");
	$("#notes-content").append("<p>'ve never been the greatest with sharing. A lot of it is just insecurities that I have, that I just can't get past. But with you? <em>I share more about my life with you than anyone else.</em> You're the first person that I told about IS, the only person who I would ever talk about my love life with (to any extent). The beginning of this semester, I was such a mess and <b>you saved me</b>. I literally felt like I was drowning, coming back to a life that seemed so foreign after the summer. I look back on those times and I'm just so glad that <i>you came along</i>, that the whole group came along. I think I needed a home more than I thought and that's what you gave me. Now, whenever I'm back in California, I call Pittsburgh my home, because home is where the heart is. <em>And my heart is with you and our entire troll family.</em></p>");
	$("#notes-content").append("<p>There's so much I'm thankful for: staying over thanksgiving, getting to know you, studying in gates late night, our google hangouts, the millions of heart emoticons that could never accurately depict my love for you.<em> I don't think I knew what family really was before I met you guys</em>, before we had our troll family. </p>");
	$("#notes-content").append("<p>I've reached the end of the page and yet I still have so much left to say. We've reached the end of our college journey together and yet <b>we've still got so much left we haven't done</b>. It's not okay, but let's pretend it is. I'll listen to 'Home' all the time and think of you and us and how I'm no longer alone and try my hardest to <em>pay no mind to the demons that fill me with fear</em>.</p>");
	$("#notes-content").append("<p id='end'>Sincerely, your sister in the truest sense</p>");

}

function support() {
	$("#notes-content").empty();
	$("#notes-name").text("| semester's end");

	$("#notes-content").append("<p>May 3, 2013</p>");
	$("#notes-content").append("<p id='imp'>Dear Slim Jim Kim,</p>");
	$("#notes-content").append("<p><em>I'm so tired of saying goodbye</em>. Every time I see you or am around you, all I want to do is just hug you and hold you really tightly, because I'm afraid the second that I let go, the moment we say our goodnights or goodbyes will be our last. It seems so irrational. <i>It's illogical</i>. But I just feel it, my lungs screaming at me, telling me that I cannot breathe without you. That the air that surrounds you is sweeter somehow, more comfortable, <b>safe</b>. Or my brain yelling that it cannot function another day plagued with thoughts of your departure, urging me to do something <i>anything</i>. <em>Just make her stay</em>. Every cell of my entire being just feels this imminent sadness, this snowball effect of despair and impending loss. I'm being dramatic. <b>But I'm not</b>.</p>");
	$("#notes-content").append("<p>In my head, <i>somewhere</i>, I know that you'll only be a bus ride away, a few day's walk, but it doesn't help. <b>It's not the same</b>. I think about you going to work at IBM in Ohio and I'm just filled with <em>anger</em>. <b> I'm not ready.</b> Maybe I'll never be, but right now, I may be the least ready. Why didn't we meet sooner? <i>It's not fair</i>. It's not fair that we met during your senior year. It's not fair that we only get one year of hand hugs, capo adventures, and gates study sessions. One year seems like a grain of sand on the beach. So minuscule in the grand scheme of things. So fast. So short. <em>One year is not enough</em>.</p>");
	$("#notes-content").append("<p>I feel like a child right now, whining about the inevitable. <i>Your future is so bright.</i> A technical position at IBM with a great salary to match. Your life will be amazing. And I know I'm being so selfish, wanting to keep you here. The next chapter of your life is about to begin and as much as I hate to admit it, I have a feeling it'll be your most exciting one yet. I can feel myself slipping from the story, downgrading to the secondary of supporting characters. It feels like my story arc is about to end. But <em>I'm not ready for my cameo to be over</em>.</p>");
	$("#notes-content").append("<p>In Harry Potter, Ron and Hermoine was always there; the main secondary characters supporting Harry in his quest against Voldemort. And in the process, the comic relief was provided by Fred and George. I can feel myself becoming Fred (or maybe Cho, which is worse I don't know). <b>And all I want to be is Hermoine</b>. I want to be there for you. I want to put my life on the line for you. If you asked me to join you on the <i>adventure of your life</i>, if you asked me to always play your supporting character, I'd say yes, in less than a heartbeat. <em>I'd say yes with every fiber of my being, with every beat of my abnormally large heart</em>. And even if I become Fred or even Cho, I'll be glad to have been in your story at all.</p>");
	$("#notes-content").append("<p id='end'>Sincerely, your Hermoine</p>");
}

function notes() {
	$("#notes-content").empty();
	$("#notes-name").text("| notes");

	$("#notes-content").append("<p id='imp'>It's finally happening.</p>");
	$("#notes-content").append("<p>The moment that I've been dreading since last semester. The farewell, at least for a little bit. <i>There's so many things that I want to tell you</i>, so many moments that I want to remind you. Words cannot even begin to describe this <b>immense sadness</b> that I feel knowing I won't be able to see you everyday, knowing that there won't be any more chances to bump into you on campus, knowing that there won't be any more random adventures to squirrel hill or shadyside.</p>");
	$("#notes-content").append("<p>I know it's cliche, but <em>I'll miss you more than you could ever know</em>. When I think of you leaving, I just feel this <i>consistent tightening in my chest and I can feel my heart hurting, this deep constant pain</i>, reminding me that our time together is limited. When you leave, I know <b>a part of me will go with you</b>. It's crazy to think, but you've become a piece of me. You're family. It's as if a piece of the puzzle is gone and no matter how you rearrange it, <em>I'll never be complete without you</em>.</p>");
	$("#notes-content").append("<p>I'm sad that I wasn't able to be there for last formal meeting, but everything that I wrote is 100% how I feel. Sometimes I think of your life after graduation and I just feel this <b>jealousy</b>, knowing that I won't be in it as often, knowing that someone else will have the chance to talk to you, sleep on your shoulder, and give you hand hugs. And I have to remind myself that I can't be selfish, that <em>the world needs you just as much as I do</em>, that I need to let go of you even when all I want to do is hug you tightly and never release. But <b>it's hard not to be selfish</b>, you know? </p>");
	$("#notes-content").append("<p><i>You're my sister.</i> Not in a kappa-way or a sorority-way. It's more than superficial. It's deeper. <em>Like our blood pumping in our veins are the same and I just feel in all the chambers of my heart that we're meant to be sisters.</em> I can't imagine how my life would've turned out without you. I don't dare to. Because without you, I'd lose a piece of me that I didn't even know was missing.</p>");
	$("#notes-content").append("<p><em>It's going to be hard</em>, feeling empty for a while. And I'll try my best to ignore the hole.</p>");
	$("#notes-content").append("<p id='end'>Without you, I'm incomplete.</p>");

}

// $("#notes-content").append("<p></p>");