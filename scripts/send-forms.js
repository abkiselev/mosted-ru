$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		let th = $(this);

		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			ym(88600356,'reachGoal','lead');
			th.animate({opacity: 0}, 100);
			th.siblings('.popup__title').animate({opacity: 0}, 100);
			th.siblings('.popup__subtitle').animate({opacity: 0}, 100);
			th.siblings('.popup__tnx').animate({opacity: 1}, 200);
			th.trigger("reset");

			setTimeout(function() {
				// Done Functions			
				th.animate({opacity: 1}, 100);
				th.siblings('.popup__title').animate({opacity: 1}, 100);
				th.siblings('.popup__subtitle').animate({opacity: 1}, 100);
				th.siblings('.popup__tnx').animate({opacity: 0}, 200);
				
			}, 3000);
		});
		return false;
	});

});

