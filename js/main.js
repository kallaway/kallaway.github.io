$(document).ready(function() {

	let wakeUp = "Wake up, Neo...";
	let knock = "Knock, knock, Neo...";
	let nameOccupation = 'Alexander Kallaway, Front End Developer';
	let writeCode = "I write code";
	let learnMore = "Learn more";
	let listCommands = "Available commands: [skills] [contact]";
	// let

	let list = "For a list of all possible commands, type 'help'";

	let $terminal = $('#terminal');

	let shortBio = '> Self-taught web developer, absolutely passionate about coding and the future of technology. I am constantly learning and expanding my skills. While you are reading this, I am probably busy learning something new. I am interested in habit development, language learning (currently French), startups.';
	let typeSpeed = 75; // in ms

	// var autotype = function(el, text, i, interval) {
	// 	// $(el).append("> ");
	// 	if (i < text.length) {
	// 		$(el).append(text[i++]);
	// 		setTimeout(function () { autotype(el, text, i, interval); }, interval);
	// 	}
	// 	return $(el);
	// };

	var autotype = function(el, text, i, interval) {
		// $(el).append("> ");
		if (i < text.length) {
			$(el).append(text[i++]);
			setTimeout(function () { autotype(el, text, i, interval); }, interval);
		}
		return $(el);
	};

	// IsAutotype is Bool
	function addToTerminal(text, isAutotype) {
		let $el = $('<p class="term-ouput"></p>').text('> ').appendTo($terminal);
		autotype($el, text, 0, typeSpeed);
		return $el;
	}

	var handleInput = function() {
		let value = $('#term-prompt').val();
		alert("Value is: " + value);

		switch (value) {
			case "whois":
				// add a div that
				// have a function that creates and appends certan elements to the pages
			case "help":
				alert("help is working!");
				let newTest = addToTerminal("Here is a list of commands", true);
			default:
				console.log("I don't understand, please choose between these options:");
		}
	}

	function createAndAutofillEl() {

	}

	function init() {
		let wakeupEl = addToTerminal(wakeUp, true);
		let nameEl = addToTerminal(nameOccupation, true);
		let listEl = addToTerminal(list, true);

		$('#term-prompt').html('&#9612;');

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

	$('#term-prompt').on("keypress", function(e) {
		// preventDefault(); // ???
		if (e.which == 13) {
			handleInput();
		}
	})

	init();
});
