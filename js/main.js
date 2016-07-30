// GOAL: To imitate terminal to the fullest extent possible

// TODO A wall of available commands
// TODO Run it through Babel (for Safari)
// TODO Maybe go into the mode of listening to ARROW_UP and ARROW_DOWN when the last result was a list (or a specific option from the available commands)
// TODO Scroll down to the input automatically
// TODO On press up, show previous command from history

$(document).ready(function() {

	let $terminal = $('#terminal');

	let termHistory = []; // work with this

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

	let arrowNavigationMode = false;

	let quotes = [
		"There is no spoon.",
		"Follow the white rabbit.",
		"Don't think you are, know you are.",
		"There's a difference between knowing the path and walking the path.",
		"Free your mind",
		"I can only show you the door. You're the one that has to walk through it.",
		"The time has come to make a choice.",
		"Choi: \"It just sounds to me like you need to unplug, man.",
		"You've been living in a dream world, Neo.",
		"What is \"real\"? How do you define \"real\"?",
		"Welcome to the real world.",
		"Because you have been down there Neo, you know that road, you know exactly where it ends. And I know that's not where you want to be.",
		"A déjà vu is usually a glitch in the Matrix. It happens when they change something.",
		"Do you believe that my being stronger or faster has anything to do with my muscles in this place? Do you think that's air you're breathing now?"
	];

	function getRandomQuote() {
		var randomIndex = Math.round(Math.random() * (quotes.length-1));
		console.log("Random index generated is " + randomIndex);
		return quotes[randomIndex];
	}

	let list = "For a list of available commands, type 'help'";

	function generateContactHTML() {
		let contact = $('<ul id="abilities"></ul>');

		let codewars = $('<li></li>');
		let github = $('<li></li>'); // optimize this
		let linkedin = $('<li></li>');
		let twitter = $('<li></li>');


		let githubLink = $('<a>Github</a>').attr({
			'href': 'https://github.com/kallaway/',
			'target': '_blank'
		});

		let twitterLink = $('<a>Twitter</a>').attr({
			'href': 'https://twitter.com/ka11away',
			'target': '_blank'
		});

		let codewarsLink = $('<a>Codewars</a>').attr({
			'href': 'http://www.codewars.com/users/Kallaway',
			'target': '_blank'
		});

		let linkedinLink = $('<a>LinkedIn</a>').attr({
			'href': 'https://ca.linkedin.com/in/kallaway',
			'target': '_blank'
		})

		codewars.append(codewarsLink);
		github.append(githubLink);
		linkedin.append(linkedinLink);
		twitter.append(twitterLink);


		console.log("$$$ Github element is currently: ");
		console.log(github);

		contact.append(codewars);
		contact.append(github);
		contact.append(linkedin);
		contact.append(twitter);


		console.log("*** Working with the DOM: contactEl - ");
		console.log(contact);
		return contact;

		arrowNavigationMode = true; // change this back after a
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
		let $el = $('<p class="term-output"></p>').append(html).appendTo($terminal);

		// $el.append(html);
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
