$("#project-content").load(apollo());

function youtubeEmbed(link) {
	var iframe = $("<iframe></iframe>");
	iframe.attr("width","480");
	iframe.attr("height","270");
	iframe.attr("src",link);
	iframe.attr("frameborder","0");

	return iframe;
}

function apollo() {
	$("#project-content").empty();
	$("#project-name").text("| Apollo");
	$("#project-content").append("<p>Below is a screenshot for the homepage of Apollo:");
	$("#project-content").append("<img src='../images/apollo.PNG'>");
	$("#project-content").append("<p><a href='http://salty-ocean-7948.herokuapp.com/'>Apollo is deployed on heroku.</a></p>");
	$("#project-content").append("<p>Apollo is a web application (written in Javascript), which allows users to discover new artists through searching artists they love.</p>");
	$("#project-content").append("<p>Apollo uses last.fm and 7digital API in order to find similar artists. Once a list is populated, the user can click through and find a suitable artist to learn more about. By spotlighting the artist, the user is provided with a bio, top tracks, and albums available for purchase on 7digital.</p>");
	$("#project-content").append("<p>Apollo is still very much in its developmental stages. There are some UI bugs that we'd like to fix as well as features we hope to add.</p>");
}

function notetaker() {
	$("#project-content").empty();
	$("#project-name").text("| NoteTaker");
	$("#project-content").append("<p>Below is a short <a href='http://www.youtube.com/watch?v=inXy9ol9O6s'>clip</a> to get you acquainted with the NoteTaker concept:");
	$("#project-content").append(youtubeEmbed("http://www.youtube.com/embed/inXy9ol9O6s?rel=0"));
	$("#project-content").append("<p><a href='http://http://rocky-earth-8065.herokuapp.com/'>NoteTaker is deployed on heroku.</a></p>");
	$("#project-content").append("<p>NoteTaker is a web application (written in Javascript), specializing in making note-taking easier. Users are able to save their notes (written in a custom markup language) onto their Google Drive folders as PDFs for later use.</p>");
	$("#project-content").append("<p><b>Behind the Scenes</b>:</p>");
	$("#project-content").append("<ul><li>Node.js</li><li>Jquery Mobile</li><li>MongoDB</li><li>Google Authentication (OAuth)</li><li>Custom Markup Language to HTML</li><li>HTML to PDF</li><li>HTML to PDF</li><li>Google Drive PDF Saving</li></ul>");
	$("#project-content").append("<p>NoteTaker was created and developed in a period of two weeks.</p>");
}

function fig() {
	$("#project-content").empty();
	$("#project-name").text("| Fig.");
	$("#project-content").append("<p>Below is a short <a href='http://www.youtube.com/watch?v=0TbasjlRlTo'>clip</a> to get you acquainted with the Fig. concept:");
	$("#project-content").append(youtubeEmbed("http://www.youtube.com/embed/0TbasjlRlTo?rel=0"));
	$("#project-content").append("<p>Fig. is an image manipulation program written in Python.");
	$("#project-content").append("<p><b>Features of Fig.</b>:</p>");
	$("#project-content").append("<p><dl><dt>Prokudin-Gorskii Negatives</dt><dd>red, green, blue plates alignment</dd><dt>Eight Filters:</dt> <dd>Blur, Contrast, Greyscale, Pencil, Sepia, Sharpen, Technicolor, Tile</dd><dt>Fig.let</dt><dd>edit parts of your image</dd></dl></p>")
	// $("#project-content").append("<p><b>Examples:</b></p>");
	// $("#project-content").append("<div id='slideshow'></div>");
	// $("#slideshow").click();
}
