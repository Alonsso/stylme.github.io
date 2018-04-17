$(function(){
	var header = document.getElementById('header');
	var headroom = new Headroom(header);
	headroom.init();

	// menu responsive
	// calculamos el ancho de la pagina

	var ancho = $(window).width(),
		links = $('#links'),
		btMenu = $('#btMenu'),
		icon = $('#btMenu .icon');

	if (ancho < 700) {
		links.hide();
		icon.addClass('fa-bars');
	}

	btMenu.on('click', function(e){
		links.slideToggle();
		icon.toggleClass('fa-bars');
		icon.toggleClass('fa-times');
	});

	$(window).on('resize', function(e){
		if ($(this).width() > 700) {
			links.show();
			icon.addClass('fa-times');
			icon.removeClass('fa-bars');
		} else {
			links.hide();
			icon.addClass('fa-bars');
			icon.removeClass('fa-times');
		}

	});

});

	
