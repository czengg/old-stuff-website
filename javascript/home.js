
// EVENT LISTENERS

$(document).ready($(".motto").css("opacity","1"));

$(".welcome").on("click tap",function() {
	$(".projects").empty();
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

	$(".bio").css("display","block");

	addBio();
});

function addBio() {
	// changeColor(".name");

	var bio = $("<div></div>");
	bio.addClass("bio");

	var title = $("<h1></h1>");
	title.addClass("title");
	title.append("about me |");
	title.css("display","inline-block");

	var resume = $("<h2></h2>");
	resume.addClass("resume title");
	resume.append("resume");
	resume.click(function() {
	    url="http://www.cindyzeng.com/resume.pdf";
	    window.open(url,"_blank");
	});

	var img = $("<img></img>");
	img.attr("src","../images/about-me.jpg");

	var bioBody = $("<p></p>");
	bioBody.attr("class","textBody");
	bioBody.append("I am a junior information systems major with a double major in human-computer interaction at Carnegie Mellon University. I am interested in web development and web-based applications. Primarily, I'm focused on the front-end development of a web application, working with small teams to create and deploy projects. I've had my fair share of experience working with multiple javascript libaries, integrating apis, and running my own server.");
	bioBody.append("<br>");
	bioBody.append("<br>");
	bioBody.append("Aside from developing personal projects, I am involved in several activities on campus. I am part of greek life where we fundraise for our local philanthropy as well as do community service as a way of giving back. Aside from being in a sorority, I am also a buggy driver for Apex, a new team founded in 2012. In my free time, I enjoy playing the ukulele and guitar, discovering new bands and music, writing my own music, and watching tv shows on hulu.");
	bioBody.append("<br>");
	bioBody.append("<br>");
	bioBody.append("Of course, the above was only a sliver of who I am. If you'd like to learn more about me, feel free to email me at czeng@andrew.cmu.edu.");
	bioBody.append("<br>");
	bioBody.append("<br>");
	bioBody.append("For a full view of my technical skills, please refer to my resume.");


	var tldrBody = $("<p></p>");
	tldrBody.attr("id","bioTLDR");
	tldrBody.append("<h1>tl;dr</h1>")
	var ul = $("<ul></ul>");
	ul.append("<li>information systems major</li>");
	ul.append("<li>human-computer interaction double major</li>");
	ul.append("<li>web development</li>");
	ul.append("<li>user experience</li>");
	ul.append("<li>front-end development</li>");
	ul.append("<li>greek - kappa kappa gamma</li>");
	ul.append("<li>ukulele & guitar player</li>");
	ul.append("<li>tv lover</li>");
	tldrBody.append(ul);


	bio.append(title);
	bio.append(resume);
	bio.append(img);
	bio.append(bioBody);
	bio.append(tldrBody);
	$(".projects").append(bio);
}

$(".design").on("click tap",function() {

	var hidden = $(".motto-end").attr("hidden");

	if(hidden !== undefined) {
		$(".projects").empty();

		addDesign();

		$(".go-top").trigger("click");
	}
})

function addDesign() {

	var designProjects = $("<div></div>");
	designProjects.addClass("designProjects");

	var title = $("<h1></h1>");
	title.addClass("title");
	title.append("design projects");

	var projectList = $("<div></div>");
	projectList.addClass("projectList");

	// BNY MELLON

	var divider = $("<div></div>");
	divider.addClass("line");

	var bnyDiv = $("<div></div>");
	bnyDiv.addClass("textBody projectDetails");
	bnyDiv.append("<img src='../images/bny-mellon.jpg'>");
	bnyDiv.append("<p>My role as an intern at BNY Mellon was to assist the user experience department on their various projects. Two projects that I had the pleasure of working on was the UX Library and the ADR website.</p>");
	bnyDiv.append("<p>The UX Library was an endeavor to bring a comprehensive user experience library that would be utilized for all future applications, giving a central look and feel to all new technologies.</p>");
	bnyDiv.append("<p>For the ADR site, I was responsible for helping restructure the popular client-facing site using rapid prototyping tools such as Axure.</p>");

	var bny = $("<h2></h2>");
	bny.addClass("projectTitle");
	bny.append("bny mellon internship");
	bny.click(function() {
		if(bnyDiv.css("display") === "none") {
			bnyDiv.css("display","block");
		}
		else {
			bnyDiv.css("display","none");
		}
	}.bind(bnyDiv));

	projectList.append(bny);
	projectList.append(bnyDiv);
	projectList.append(divider);

	// THE LATEST

	var divider2 = $("<div></div>");
	divider2.addClass("line");

	var latestDiv = $("<div></div>");
	latestDiv.addClass("textBody projectDetails");
	latestDiv.append("<img src='../images/the-latest.png' style='width:40%;'>");
	latestDiv.append("<p>Working at thelatest.com gave me a different perspective on how startups in its early stages operates. As an intern, I gained exposure to a variety of different roles in the company, giving me experience in a diversity of responsibilities.</p>");
	latestDiv.append("<p>Thelatest.com is headed by Jeffrey Hall, former VP of Marketing Services at the LA Times. I was able to work very closely with Jeffrey and a group of mentors to formulate ideas and strategies for the company.</p>");
	latestDiv.append("<p>As an intern, I contributed to the creation of the logo, layout, and fundraising efforts of the startup.</p>");

	var latest = $("<h2></h2>");
	latest.addClass("projectTitle");
	latest.append("thelatest internship");
	latest.click(function() {
		if(latestDiv.css("display") === "none") {
			latestDiv.css("display","block");
		}
		else {
			latestDiv.css("display","none");
		}
	}.bind(latestDiv));

	projectList.append(latest);
	projectList.append(latestDiv);
	projectList.append(divider2);

	// POSTERS PROJECT

	var postersDiv = $("<div></div>");
	postersDiv.addClass("textBody projectDetails");
	postersDiv.append("<img src='../images/swear-and-shake.png' style='width:28%; margin-right:2%;'>");
	postersDiv.append("<img src='../images/pretty-lights.png' style='width:28%;'>");
	postersDiv.append("<img src='../images/the-knocks.png' style='width:28%; margin-left:2%;'>");
	postersDiv.append("<p>This mock poster series was done as a project for my fundamentals design class.</p>");
	postersDiv.append("<p>The concept behind this poster series is utilizing letter shape to create a centralized illustration or feeling that conveys the artist's musical stylings.</p>");
	postersDiv.append("<p>Swear and Shake is an indie folk band, giving it down-to-earth, nature-like qualities. Thus, the coloring followed that theme with the illustration of the S's lending way to ideas of comraderie and home.</p>");
	postersDiv.append("<p>Pretty Lights is a electronic dj with warm undertones to his songs. There's a sense of being surrounded by acquaintances in a lounge in the 50s. Thus, the colors are overwhelmingly warm. The illustration of the P as the sun further drives the idea of warmth.</p>");
	postersDiv.append("<p>The Knocks is an electronic duo with a very groovy sound. They seem, to me, to be an artist that you listen to surrounded by close friends, swaying and dancing. Thus, the colors have a warmth to them, but with a retro styling. The illustrations of the T and K are very straightforward, like the band, lanky and awkward but still cool.</p>");

	var posters = $("<h2></h2>");
	posters.addClass("projectTitle");
	posters.append("posters");
	posters.click(function() {
		if(postersDiv.css("display") === "none") {
			postersDiv.css("display","block");
		}
		else {
			postersDiv.css("display","none");
		}
	}.bind(postersDiv));


	projectList.append(posters);
	projectList.append(postersDiv);

	designProjects.append(title);
	designProjects.append(projectList);
	$(".projects").append(designProjects);

}

$(".code").on("click tap",function() {
	var hidden = $(".motto-end").attr("hidden");

	if(hidden !== undefined) {
		$(".projects").empty();

		addCode();

		$(".go-top").trigger("click");
	}
})

function addCode() {

	var codeProjects = $("<div></div>");
	codeProjects.addClass("codeProjects");

	var title = $("<h1></h1>");
	title.addClass("title");
	title.append("coding projects");

	var projectList = $("<div></div>");
	projectList.addClass("projectList");

	// GITHUB

	var divider = $("<div></div>");
	divider.addClass("line");

	var github = $("<h2></h2>");
	github.addClass("projectTitle");
	github.append("github");
	github.click(function() {
		url = "https://www.github.com/czengg";
		window.open(url,"_blank");
	})

	projectList.append(github);
	projectList.append(divider);

	// TUTORME

	var divider1 = $("<div></div>");
	divider1.addClass("line");

	var tutormeDiv = $("<div></div>");
	tutormeDiv.addClass("textBody projectDetails");
	tutormeDiv.append("<p>Below is a short <a href='http://www.youtube.com/watch?v=nZ7IGpD4X4U'>clip</a> to get you acquainted with the TutorMe concept:");
	tutormeDiv.append(youtubeEmbed("http://www.youtube.com/embed/nZ7IGpD4X4U?rel=0"));
	tutormeDiv.append("<p><a href='http://tutorme.herokuapp.com/' target='_blank'>TutorMe is deployed on heroku.</a></p>");

	var tutorme = $("<h2></h2>");
	tutorme.addClass("projectTitle");
	tutorme.append("tutor me");
	tutorme.click(function() {
		if(tutormeDiv.css("display") === "none") {
			tutormeDiv.css("display","block");
		}
		else {
			tutormeDiv.css("display","none");
		}
	}.bind(tutormeDiv));

	projectList.append(tutorme);
	projectList.append(tutormeDiv);
	projectList.append(divider1);

	// NOTETAKER

	var divider2 = $("<div></div>");
	divider2.addClass("line");

	var notetakerDiv = $("<div></div>");
	notetakerDiv.addClass("textBody projectDetails");
	notetakerDiv.append("<p>Below is a short <a href='http://www.youtube.com/watch?v=inXy9ol9O6s'>clip</a> to get you acquainted with the NoteTaker concept:");
	notetakerDiv.append(youtubeEmbed("http://www.youtube.com/embed/inXy9ol9O6s?rel=0"));
	notetakerDiv.append("<p><a href='http://rocky-earth-8065.herokuapp.com/' target='_blank'>NoteTaker is deployed on heroku.</a></p>");
	notetakerDiv.append("<p>NoteTaker is a web application (written in Javascript), specializing in making note-taking easier. Users are able to save their notes (written in a custom markup language) onto their Google Drive folders as PDFs for later use.</p>");
	notetakerDiv.append("<h2>Behind the Scenes:</h2>");
	notetakerDiv.append("<ul><li>Node.js</li><li>Jquery Mobile</li><li>MongoDB</li><li>Google Authentication (OAuth)</li><li>Custom Markup Language to HTML</li><li>HTML to PDF</li><li>HTML to PDF</li><li>Google Drive PDF Saving</li></ul>");
	notetakerDiv.append("<p>NoteTaker was created and developed in a period of two weeks.</p>");
	

	var notetaker = $("<h2></h2>");
	notetaker.addClass("projectTitle notetaker");
	notetaker.append("notetaker");
	notetaker.click(function() {
		if(notetakerDiv.css("display") === "none") {
			notetakerDiv.css("display","block");
		}
		else {
			notetakerDiv.css("display","none");
		}
	}.bind(notetakerDiv));

	projectList.append(notetaker);
	projectList.append(notetakerDiv);
	projectList.append(divider2);

	// FIG.

	var divider3 = $("<div></div>");
	divider3.addClass("line");

	var figDiv = $("<div></div>");
	figDiv.addClass("textBody projectDetails");
	figDiv.append("<p>Below is a short <a href='http://www.youtube.com/watch?v=0TbasjlRlTo'>clip</a> to get you acquainted with the Fig. concept:");
	figDiv.append(youtubeEmbed("http://www.youtube.com/embed/0TbasjlRlTo?rel=0"));
	figDiv.append("<p>Fig. is an image manipulation program written in Python.");
	figDiv.append("<p><b>Features of Fig.</b>:</p>");
	figDiv.append("<p>Prokudin-Gorskii Negatives</br><i>red, green, blue plates alignment</i></br>Eight Filters:</br><i>Blur, Contrast, Greyscale, Pencil, Sepia, Sharpen, Technicolor, Tile</i></br>Fig.let</br><i>edit parts of your image</i></p>");

	var fig = $("<h2></h2>");
	fig.addClass("projectTitle");
	fig.append("fig");
	fig.click(function() {
		if(figDiv.css("display") === "none") {
			figDiv.css("display","block");
		}
		else {
			figDiv.css("display","none");
		}
	}.bind(figDiv));

	projectList.append(fig);
	projectList.append(figDiv);
	projectList.append(divider3);

	// APOLLO

	var apolloDiv = $("<div></div>");
	apolloDiv.addClass("textBody projectDetails");
	apolloDiv.append("<p>Below is a screenshot for the homepage of Apollo:");
	apolloDiv.append("<img src='../images/apollo.png'>");
	apolloDiv.append("<p><a href='http://salty-ocean-7948.herokuapp.com/' target='_blank'>Apollo is deployed on heroku.</a></p>");
	apolloDiv.append("<p>Apollo is a web application (written in Javascript), which allows users to discover new artists through searching artists they love.</p>");
	apolloDiv.append("<p>Apollo uses last.fm and 7digital API in order to find similar artists. Once a list is populated, the user can click through and find a suitable artist to learn more about. By spotlighting the artist, the user is provided with a bio, top tracks, and albums available for purchase on 7digital.</p>");
	apolloDiv.append("<p>Apollo is still very much in its developmental stages. There are some UI bugs that we'd like to fix as well as features we hope to add.</p>");

	var apollo = $("<h2></h2>");
	apollo.addClass("projectTitle");
	apollo.append("apollo");
	apollo.click(function() {
		if(apolloDiv.css("display") === "none") {
			apolloDiv.css("display","block");
		}
		else {
			apolloDiv.css("display","none");
		}
	}.bind(apolloDiv));

	projectList.append(apollo);
	projectList.append(apolloDiv);

	codeProjects.append(title);
	codeProjects.append(projectList);
	$(".projects").append(codeProjects);

}

function youtubeEmbed(link) {
	var iframe = $("<iframe></iframe>");
	iframe.attr("width","480");
	iframe.attr("height","270");
	iframe.attr("src",link);
	iframe.attr("frameborder","0");

	return iframe;
}

$(".do").on("click tap",function() {
	var hidden = $(".motto-end").attr("hidden");

	if(hidden !== undefined) {
		$(".projects").empty();

		addDo();

		$(".go-top").trigger("click");
	}
})

function addDo() {

	var doProjects = $("<div></div>");
	doProjects.addClass("doProjects");

	var title = $("<h1></h1>");
	title.addClass("title");
	title.append("do something projects");

	var projectList = $("<div></div>");
	projectList.addClass("projectList");

	// KAPPA

	var divider = $("<div></div>");
	divider.addClass("line");

	var kappaDiv = $("<div></div>");
	kappaDiv.addClass("textBody projectDetails");
	kappaDiv.append("<p>greek life at carnegie mellon:</p>");
	kappaDiv.append("<img src='../images/kappa.jpg'>");
	kappaDiv.append("<p>As a member of Kappa Kappa Gamma, I am involved in a great many things on campus. As a sorority, we have around 90some sisters. Amazingly all our sisters are extremely dedicated to our philanthropic efforts as well as raising our campus presence. We participate in school traditions such as greek sing and booth.</p>");
	kappaDiv.append("<p>Through joining a sorority, I have learned a great deal about leadership, teamwork, and how to building a two-story booth. Traditionally, Carnegie Mellon holds an event every year called Carnival. During Carnival week, classes are cancelled and the local community comes out to see the impressive booths that each organization has built for the event. These booths house games for the children and adults to play while walking through the booth. The artwork, both interior and exterior, are always extremely detailed and awards are given out to the best booths of the year.</p> ");
	kappaDiv.append("<p>Below is a example of a booth:</p>");
	kappaDiv.append("<img src='http://farm1.static.flickr.com/185/466845684_39c3c04696.jpg?v=0'>");
	kappaDiv.append("<p>Aside from building booths, I was a recruitment counselor for our formal membership recruitment, an experience I enjoyed greatly. Being a recruitment counselor (rho sig) meant I was to disaffiliate from my chapter and provide non-bias advice to potential new members going through recruitment. Through this process, I served as a mentor to my group of girls, taking the role of a listener if they had concerns or doubts about the process or joining greek life. By being a rho sigma, I was able to interact with different types of girls and figure out how to properly communicate as well as give advice to them.</p>");
	kappaDiv.append("<p>Below was the group of girls I served as a rho sigma for:</p>");
	kappaDiv.append("<img src='../images/rho-sig.jpg'>");

	var kappa = $("<h2></h2>");
	kappa.addClass("projectTitle");
	kappa.append("kappa kappa gamma");
	kappa.click(function() {
		if(kappaDiv.css("display") === "none") {
			kappaDiv.css("display","block");
		}
		else {
			kappaDiv.css("display","none");
		}
	}.bind(kappaDiv));

	projectList.append(kappa);
	projectList.append(kappaDiv);
	projectList.append(divider);

	// APEX

	var divider2 = $("<div></div>");
	divider2.addClass("line");

	var apexDiv = $("<div></div>");
	apexDiv.addClass("textBody projectDetails");
	apexDiv.append("<p>buggy life at carnegie mellon:</p>");
	apexDiv.append("<img src='../images/buggy.jpg'>");
	apexDiv.append("<p>As one of the first members of Apex, I learned a lot about Carnegie Mellon culture through the organization. Buggy is a something all to Carnegie Mellon itself. The idea is to fit a driver (my role) into a small vertical vehicle that is pushed by pushers, who are runners keeping the buggy moving along during the uphills. By joining Apex, I was able to understand the struggles of being an organization at its infancy. The experience has been invaluable to my college years and has been the avenue where I've met and connected with the most friendly, genuine, passionate people I've ever had the chance to meet.</p>");
	apexDiv.append("<p>As our chairman would say: Eat, Live, Breathe Buggy.</p>");

	var apex = $("<h2></h2>");
	apex.addClass("projectTitle");
	apex.append("apex");
	apex.click(function() {
		if(apexDiv.css("display") === "none") {
			apexDiv.css("display","block");
		}
		else {
			apexDiv.css("display","none");
		}
	}.bind(apexDiv));

	projectList.append(apex);
	projectList.append(apexDiv);
	projectList.append(divider2);

	// INFANT LANGUAGE LEARNING LAB

	var infantDiv = $("<div></div>");
	infantDiv.addClass("textBody projectDetails");
	infantDiv.append("<p>research life at carnegie mellon:</p>");
	infantDiv.append("<img src='http://www.psy.cmu.edu/~thiessen/Home_files/baby_on_floor2.jpg'>");
	infantDiv.append("<p>The Infant Language Learning Lab is run by Professor Erik Thiessen. The lab conducts studies on infants as well as adults to find out how infants learn language and what affects an infant's ability to learn. A great deal of the studies involve statistical learning. As a research assistant at the lab, I learned how to run studies, interact with infants, and how to conduct myself in a lab.</p>");
	infantDiv.append("<p>I had joined the lab as a freshman still unsure of the path I wanted to take in my professional career. Before realizing my passion was in web development, I had seriously thought about going to medical school. Thus, the lab provided a great opportunity to get real experience dealing with the most difficult patients: infants. As someone who loves children, working at the lab was incredibly enjoyable and I gained valuable insight on how research works in academia.</p>");

	var infant = $("<h2></h2>");
	infant.addClass("projectTitle");
	infant.append("infant language learning lab");
	infant.click(function() {
		if(infantDiv.css("display") === "none") {
			infantDiv.css("display","block");
		}
		else {
			infantDiv.css("display","none");
		}
	}.bind(infantDiv));

	projectList.append(infant);
	projectList.append(infantDiv);

	doProjects.append(title);
	doProjects.append(projectList);
	$(".projects").append(doProjects);

}

// function changeColor(selector) {

// 	if(selector !== ".name") {
// 		$(".name").removeClass("clicked");
// 	}
// 	if(selector !== ".design") {
// 		$(".design").removeClass("clicked");
// 	}
// 	if(selector !== ".code") {
// 		$(".code").removeClass("clicked");
// 	}
// 	if(selector !== ".do") {
// 		$(".do").removeClass("clicked");
// 	}

// 	$(selector).addClass("clicked");
// }

// $(document).on("click",$(".design"),function() {
// 	changeColor(".design");
// })

// // $(".design").click(function() {
// // 	$(".projects").empty();
// // 	changeColor(".design");
// // })

// $(".code").click(function() {
// 	changeColor(".do .nav");
// 	$(".projects").empty();
// })

// $(".do").click(function() {
// 	changeColor(".do");
// 	$(".projects").empty();
// })
