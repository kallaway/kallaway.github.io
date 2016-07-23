$(document).ready(function() {

	let wakeUp = "Wake up, Neo...";
	let knock = "Knock, knock, Neo...";
	let nameOccupation = 'Alexander Kallaway, Front End Developer';
	let writeCode = "I write code";
	let learnMore = "Learn more";
	// let

	let shortBio = '> Self-taught web developer, absolutely passionate about coding and the future of technology. I am constantly learning and expanding my skills. While you are reading this, I am probably busy learning something new. I am interested in habit development, language learning (currently French), startups.';
	let typeSpeed = 50; // in ms

	var autotype = function(el, text, i, interval) {
		// $(el).append("> ");
		if (i < text.length) {
			$(el).append(text[i++]);
			setTimeout(function () { autotype(el, text, i, interval); }, interval);
		}
		return $(el);
	};

	var handleInput = function() {
		let value = $('#term-prompt').text();


		switch (value) {
			case "whois":
				// add a div that
				// have a function that creates and appends certan elements to the pages
			default:
				console.log("I don't understand, please choose between these options:");
		}
	}

	function createAndAutofillEl() {

	}

	function init() {

		let p = ('<p id="wakeup"></p>').addClass("term-result");
		autotype('#name', '> Alexander Kallaway, Front End Developer', 0, typeSpeed);


		autotype('#name', '> Alexander Kallaway, Front End Developer', 0, typeSpeed);

		// autotype('#name', '> Alexander Kallaway, Front End Developer', 0, typeSpeed);
		// make "I write code" to be text first, and then change it to link?
		// autotype('#profession', '> Front End Developer', 0, typeSpeed);

	}

	$(".expand").on("click", function() {
		$(".learn").delay(100).hide();
		$("#short-bio").delay(200).show();

		autotype('#short-bio', shortBio, 0, typeSpeed / 2);

		$("#online-presence").delay(300).show();
		$("#abilities").show();
	});

	$('#term-prompt').on("keypress", function() {
		// preventDefault(); // ???
	})

	init();
});
