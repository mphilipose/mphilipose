// var container = $('<div id="console">');
// $('.container').append(container);
// var controller = container.console({
// 	promptLabel: 'Demo> ',
// 	commandValidate: function(line) {
// 		if (line == "") return false;
// 		else return true;
// 	},
// 	commandHandle: function(line) {
// 		return [{
// 			msg: "=> [12,42]",
// 			className: "jquery-console-message-value"
// 		}, {
// 			msg: ":: [a]",
// 			className: "jquery-console-message-type"
// 		}]
// 	},
// 	autofocus: true,
// 	animateScroll: true,
// 	promptHistory: true,
// 	charInsertTrigger: function(keycode, line) {
// 		// Let you type until you press a-z
// 		// Never allow zero.
// 		return !line.match(/[a-z]+/) && keycode != '0'.charCodeAt(0);
// 	}
// });

particlesJS('particles', {
	particles: {
		color: '#F8F8F2',
		shape: 'triangle',
		opacity: 0.6,
		size: 2,
		size_random: false,
		nb: 100,
		line_linked: {
			enable_auto: true,
			distance: 300,
			color: '#F8F8F2',
			opacity: 0.4,
			width: 1
		},
		anim: {
			enable: true,
			speed: 1.666
		}
	},
	interactivity: {
		enable: false,
	},
	retina_detect: true
});

$(document).ready(function() {
	$('#content').find('*').not('.links, a, i').each(function(i) {
		var element = $(this);
		console.log(element);
		setTimeout(function() {
			element.addClass('transition');
		}, 500 * i);
	})

	setTimeout(function() {
		$('#content').find('.links').addClass('transition');
	}, 1000);
	setTimeout(function() {
		$('#content').find('.separator').addClass('drawn');
	}, 1500);
});
