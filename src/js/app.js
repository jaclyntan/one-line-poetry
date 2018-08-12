console.log("(c) Jaclyn Tan http://jaclyntan.com");

$(document).ready(function () {
	function shuffle(array) {
		let counter = array.length;

		// While there are elements in the array
		while (counter > 0) {
			// Pick a random index
			const index = Math.floor(Math.random() * counter);

			// Decrease counter by 1
			counter--;

			// And swap the last element with it
			const temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
		}

		return array;
	}

	$.getJSON("index.json", function (json) {
		var items = json.poetry;
		console.log(items[0]);
		shuffle(items);
		// console.log(items[0].url);
		var randlink = items[0].url;

		$("#random").click(function (e) {
			e.preventDefault();
			window.location = randlink;
		});
	});


	function menu() {
		$(".header-wrapper").delay(8000).queue(function () {
			$(this).removeClass("show")
		});
		$(".more-tab").delay(8000).queue(function () {
			$(this).addClass("show")
		});
		$(".site-header").on({
			mouseenter: function () {
				$(".header-wrapper").addClass("show");
				$(".more-tab").removeClass("show");
			},
			mouseleave: function () {
				$(".header-wrapper").removeClass("show");
				$(".more-tab").addClass("show");
			}
		});
	}
	var windowWidth = $(window).width();
	if ((!$("body").hasClass("archive")) && (!$("body").hasClass("page")) && (windowWidth > 1200)) {
		menu();
	}

	$(window).resize(function () {
		if ((!$("body").hasClass("archive")) && (!$("body").hasClass("page")) && (windowWidth > 1200)) {
			menu();
		} else {
			$(".site-header").off("mouseenter mouseleave").removeClass("mob-show");
		}
	});

	$(".more-tab").click(function () {
		$(".site-header").toggleClass("mob-show");
		$("body").toggleClass("menu-open");
	});

	$(".single").hover(function () {
		$(this).children(".thumb").toggleClass("show");
	});

});