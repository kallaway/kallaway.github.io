// TODO A wall of available commands
// TODO Run it through Babel (for Safari)

$(document).ready(function() {

	let $terminal = $('#terminal');

	// Text Options
	let wakeUp = "Wake up, Neo...",
	knock = "Knock, knock, Neo...",
	about = 'My name is Alexander Kallaway, and I am a Front End Developer.',
	writeCode = "I write code",
	learnMore = "Learn more",
	quote = "There is no spoon.",
	listCommands = 'Available commands: [about] [bio] [clear] [contact] [skills] [social] [quote]',
	commandNotFound = 'Command not found.',
	skills = "Main: HTLM5, CSS3, AngularJS, D3, GIT and Github.\n Familiar with: ReactJS, Haxe, OpenFL, Python, THREE.js, Node.js.",
	contact = "Contact me on Twitter -> @ka11away";
	// let

	let quotes = [
		"There is no spoon.",
		"Follow the white rabbit.",
		"Don't think you are, know you are.",
		"There's a difference between knowing the path and walking the path.",
		"Free your mind"
	];

	function getRandomQuote() {
		var randomIndex = Math.round(Math.random() * (quotes.length-1));
		console.log("Random index generated is " + randomIndex);
		return quotes[randomIndex];
	}

	let list = "For a list of available commands, type 'help'";

	function generateContactHTML() {
		let contact = $('<ul id="abilities"></ul>');

		let github = $("<li><li>");

		let githubLink = $("<a>Github</a>").attr({
			"href": "https://github.com/kallaway/",
			"target": "_blank"
		});

		github.append(githubLink);

		contact.append(github);

		return contact;

		// <li><i class="fa fa-github"></i> <a href="https://github.com/kallaway/" target="_blank">build</a></li>

		// let vrettaHTML = $('<li></li>').append()
	}

	function generateSkillHTML() {
		let skillsFullOne = $('<div id="skills"></div>');

		let skillsFull = $('<div id="skills"><p>> list skill</p><p>> where &lt;skill&gt; is one of:<skill><p class="subresult">HTLM5, CSS3, AngularJS, D3, GIT and Github, </p></div><div id="familiar"><p>> list familiar area:</p><p>> where &lt;area&gt; is one of:</p><p class="subresult">Haxe, OpenFL, Python, THREE.js, Node.js</p></div>')
	}

	// <li><i class="fa fa-suitcase"></i> <a href="https://www.vretta.com/" target="_blank">work</a></li>


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
	// isHTML or not

	function clearTerminal() {
		$('.term-output').remove();
	}

	function addHTMLToTerminal(html) {
		let $el = $('<p class="term-output"></p>').appendTo($terminal);

		$el.append(html);
	}

	function addToTerminal(text, speed, isAutotype) {
		let $el = $('<p class="term-output"></p>').text('> ').appendTo($terminal);

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
			case 'clear':
				clearTerminal();
				let listEl = addToTerminal(list, typeSpeedFast, true);
				break;
			case 'contact':
				let contactEl = addToTerminal(contact, typeSpeedFast, true);
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

				let skillsEl = addToTerminal(skills, typeSpeedFast, false);
				// generateSkillHTML();
				// $('#abilities').show();
				break;

			case 'social':
				let socialHTML = generateContactHTML();
				let socialEl = addHTMLToTerminal(socialHTML);
				break;

			case 'quote':

				let quoteEl = addToTerminal(getRandomQuote(), typeSpeedFast, false);
				break;
			default:
				console.log("I don't understand, please choose between these options:");
				let commandNotFoundEl = addToTerminal(commandNotFound, typeSpeedFast, false);
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

		}, 6500);

		// make "I write code" to be text first, and then change it to link?

	}

	$('body').on('click', function() {
		$('#term-prompt').focus();
	});

	$('#term-prompt').on('click', function() {
		$('#term-prompt').focus();
	});

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
