//Слайдер
$(document).ready(function() {
	$("#owl-demo").owlCarousel({
		//autoPlay : 3000,
		stopOnHover : true,
		navigation:true,
		paginationSpeed : 500,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true,
		transitionStyle:"goDown",
		navigationText : ["",""]
	});
});

//Выпадение мобильного меню
$(function(){
	var link = $('#mobile_hamb');
	var menu = $('#mobile_menu');
	link.click(function(){
		menu.toggleClass('open');
	})
});


// Изменение положения треугольника 
// на ссылках каталога
$(function(){
	var menu = $('.catalog_drop');
	var link = menu.children('a');

	link.click(function(){
		link.not($(this)).removeClass('open');
		$(this).toggleClass('open');
	});
});


// Выравнивание управляющих 
// кнопок слайдера по высоте
$(function() {
	$(window).load(function(){
		var height = $(".owl-wrapper-outer").height();
		var buttons = $('.owl-prev, .owl-next' );
		buttons.css({
			'bottom' : height/2 + 36,
			'transform' : 'translatey(50%)',
			'display' : 'block'
			});
		buttons.click(function(){
			//buttons.hide();
			setTimeout (function(){
				var height = $(".owl-wrapper-outer").height();
				buttons.animate({'bottom' : height/2 + 36, 'transform' : 'translatey(50%)'}, 300);
			}, 500);
		});


	})
	$(window).resize(function(){
		var buttons = $('.owl-prev, .owl-next' );
		var height = $(".owl-wrapper-outer").height();
		buttons.css({
			'bottom' : height/2 + 36,
			'transform' : 'translatey(50%)'
			});
	});
});

//var height = $(".owl-wrapper-outer").height();



// Смещение шапки в момент скрола
$(function() {
	var header = $(".lower_header");
	var offset = $(header).offset().top;
	var main = $('main');

	$(window).scroll(function (){
		var windowScroll = $(window).scrollTop();
		if (windowScroll > offset) {
			$(header).addClass("fix");
			main.css('margin-top', '64px');
		} else {
			$(header).removeClass("fix");
			$('main').css('margin-top', '0');
		}
	});
});


