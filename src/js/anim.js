"use strict"

//  статистика
 $(document).ready(function() {
	let windowHeight = $(window).height();

	$(document).on('scroll', function(a) {
		$('#statID').each(function() {
			let self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				for ( let i = 0; i <= 120; i++) {
					setTimeout( function timer(){
						 $('#clientsID').text(i);	
					}, i*10 );
				}
				for ( let i = 0; i <= 4600; i++) {
					setTimeout( function timer(){
						 $('#hourID').text(i);	
					}, i*0.3 );
				}
				for ( let i = 0; i <= 340; i++) {
					setTimeout( function timer(){
						 $('#projectID').text(i);	
					}, i*3 );
				}
				for ( let i = 0; i <= 23; i++) {
					setTimeout( function timer(){
						 $('#rewardID').text(i);	
					}, i*40 );
				}
			$(this).off(a)
			}
		});
	});
});

// плавный переход по якорям

$("a.nav-link").on("click", function(e){
    e.preventDefault();
    let anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});
 

// анимации

$(document).ready(function() {
	let windowHeight = $(window).height();

	$(document).on('scroll', function(a) {
		$('#meID').each(function() {
			let self = $(this),
			height = self.offset().top + 200;
			if ($(document).scrollTop() + windowHeight >= height) {
				$('#meID').animate({opacity: 1}, 500)
			$(this).off(a)
			}
		});
	});
});

$(document).ready(function() {
	let windowHeight = $(window).height();

	$(document).on('scroll', function(a) {
		$('#services').each(function() {
			let self = $(this),
			height = self.offset().top + 200;
			if ($(document).scrollTop() + windowHeight >= height) {
				$('#services').animate({opacity: 1}, 500)
			$(this).off(a)
			}
		});
	});
});

$(document).ready(function() {
	let windowHeight = $(window).height();

	$(document).on('scroll', function(a) {
		$('#cases').each(function() {
			let self = $(this),
			height = self.offset().top + 200;
			if ($(document).scrollTop() + windowHeight >= height) {
				$('#cases').animate({opacity: 1}, 500)
			$(this).off(a)
			}
		});
	});
});

$(document).ready(function() {
	let windowHeight = $(window).height();

	$(document).on('scroll', function(a) {
		$('#price').each(function() {
			let self = $(this),
			height = self.offset().top + 200;
			if ($(document).scrollTop() + windowHeight >= height) {
				$('#price').animate({opacity: 1}, 500)
			$(this).off(a)
			}
		});
	});
});

$(document).ready(function() {
	let windowHeight = $(window).height();

	$(document).on('scroll', function(a) {
		$('#statID').each(function() {
			let self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				$('#statID').animate({opacity: 1}, 500)
			$(this).off(a)
			}
		});
	});
});

$(document).ready(function() {
	let windowHeight = $(window).height();

	$(document).on('scroll', function(a) {
		$('#reviev').each(function() {
			let self = $(this),
			height = self.offset().top + 200;
			if ($(document).scrollTop() + windowHeight >= height) {
				$('#reviev').animate({opacity: 1}, 500)
			$(this).off(a)
			}
		});
	});
});

$(document).ready(function() {
	let windowHeight = $(window).height();

	$(document).on('scroll', function(a) {
		$('#contact').each(function() {
			let self = $(this),
			height = self.offset().top + 200;
			if ($(document).scrollTop() + windowHeight >= height) {
				$('#contact').animate({opacity: 1}, 500)
			$(this).off(a)
			}
		});
	});
});


