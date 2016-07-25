$(document).ready(function() {

	// Text Options
	let wakeUp = "Wake up, Neo...";
	let knock = "Knock, knock, Neo...";
	let about = 'My name is Alexander Kallaway, and I am a Front End Developer.';
	let writeCode = "I write code";
	let learnMore = "Learn more";
	let quote = "There is no spoon.";
	let listCommands = "Available commands: [about] [bio] [contact] [skills] [social] [quote]";
	// let

	let list = "For a list of possible commands, type 'help'";

	let $terminal = $('#terminal');

	let shortBio = 'Self-taught web developer, absolutely passionate about coding and the future of technology. I am constantly learning and expanding my skills. While you are reading this, I am probably busy learning something new. I am interested in habit development, language learning (currently French), startups.';
	let typeSpeedSlow = 75;
	let typeSpeedFast = 60; // in ms

	var autotype = function(el, text, i, interval) {
		// $(el).append("> ");
		if (i < text.length) {
			$(el).append(text[i++]);
			setTimeout(function () { autotype(el, text, i, interval); }, interval);
		}
		return $(el);
	};

	// IsAutotype is Bool
	function addToTerminal(text, speed, isAutotype) {
		let $el = $('<p class="term-ouput"></p>').text('> ').appendTo($terminal);

		if (isAutotype) {
			autotype($el, text, 0, speed);
		} else {
			$el.append(text);
		}

		return $el;
	}

	var handleInput = function() {
		let value = $('#term-prompt').val();

		switch (value) {
			case 'about':
				let aboutEl = addToTerminal(about, typeSpeedFast, false);
				break;
			case 'bio':
				let bioEl = addToTerminal(shortBio, typeSpeedFast, false);
				break;
			case "whois":
				// add a div that
				// have a function that creates and appends certan elements to the pages
				break;
			case "help":
				// alert("help is working!");
				let helpEl = addToTerminal(listCommands, typeSpeedFast, false);
				break;
			case "list":
				break;

			case 'skills':
				$('#abilities').show();
				break;


			case 'quote':
				let quoteEl = addToTerminal(quote, typeSpeedFast, false);
				break;
			default:
				console.log("I don't understand, please choose between these options:");
				let unknownEl = addToTerminal(listCommands, typeSpeedFast, false);
		}
	}

	function createAndAutofillEl() {

	}

	function init() {



		// improve this code
		setTimeout(function() {
			let wakeupEl = addToTerminal(wakeUp,  typeSpeedSlow, true);
		}, 200);

		setTimeout(function() {
			let listEl = addToTerminal(list, typeSpeedFast, true);
		}, 3500);

		setTimeout(function() {
			$('#term-prompt').html('&#9612;');
			$('#terminal-line').show();
			$('#term-prompt').focus();
		}, 6000);


		// make "I write code" to be text first, and then change it to link?
		// autotype('#profession', '> Front End Developer', 0, typeSpeedFast);

	}

	$(".expand").on("click", function() {
		$(".learn").delay(100).hide();
		$("#short-bio").delay(200).show();

		autotype('#short-bio', shortBio, 0, typeSpeedFast / 2);

		$("#online-presence").delay(300).show();
		$("#abilities").show();
	});

	$('#term-prompt').on("keypress", function(e) {
		// preventDefault(); // ???
		if (e.which == 13) {
			handleInput();
			// clear the input
			$('#term-prompt').val('');
		}

	})

	init();
});
