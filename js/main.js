//Слайдер (основной)

$(function(){
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
});

// Слайлер (сопутствующие товары)
$(function(){
	$(document).ready(function() {
		var owl_as = $("#owl-associated");
		var next = $(".associated_nav").find('.next');
		var prev = $(".associated_nav").find('.prev');

			owl_as.owlCarousel({
			items : 4, 
			itemsDesktop : [1200,2], 
			itemsDesktopSmall : [900,2], 
			itemsTablet: [600,1], 
			itemsMobile : false 
		});
		next.click(function(){
			owl_as.trigger('owl.next');
		})
		prev.click(function(){
			owl_as.trigger('owl.prev');
		})
	});
});

// Слайлер (рекомендуемые)

$(function(){
	$(document).ready(function() {
		var owl_rec = $("#owl-recomended");
		var next = $(".recomended_nav").find('.next');
		var prev = $(".recomended_nav").find('.prev');

			owl_rec.owlCarousel({
			items : 4, 
			itemsDesktop : [1200,2], 
			itemsDesktopSmall : [900,2], 
			itemsTablet: [600,1], 
			itemsMobile : false 
		});
		next.click(function(){
			owl_rec.trigger('owl.next');
		})
		prev.click(function(){
			owl_rec.trigger('owl.prev');
		})
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
	var link = menu.children('a').children('i');

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


// Смещение шапки в момент скрола
if($(document).width() > 1200) {
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
}


// Выравнивание высоты
if($(document).width() > 992) {
	$(function() {
		var aside = $("aside");
		var container = $(".bg_container");
		var height = aside.height();
		container.css({'min-height' : height });
	});
	$(window).resize(function(){
		var aside = $("aside");
		var container = $(".bg_container");
		var height = aside.height();
		container.css({'min-height' : height });
	});
}


// Счетчик количества товаров

$(function() {
	var calc = $(".counter").find("button");
	var prev = $(".counter").find(".scoreDown");
	var next = $(".counter").find(".scoreUp");

	calc.click(function(){
		var counter = $(this).parent().find('input').val();
		var score = $(this).parent().find(".score");
		if ( $(this).hasClass('scoreUp') ) {
			$(this).parent().find('.scoreDown').removeClass('stop');
			if(counter < 20){
				score.val(++counter);
			}
			if(counter === 20) {
				$(this).addClass('stop');
			}
		}
		else {
			$(this).parent().find('.scoreUp').removeClass('stop');
			if (counter > 1) {
				score.val(--counter);
			}
			if(counter === 1) {
				$(this).addClass('stop');
			}
		}
	});
});



// Инициализация и навтройка диапазона цен

if( $("div").is("#range_block") ) {

	$(function(){
		var min = 0;
		var max = 10000;

		$( "#slider-range" ).slider({
		range: true,
		orientation: rangeOrientation(),
		min: min,
		max: max,
		step : 10,
		values: [ min, max ],

		slide: function( event, ui ) {
			$('#minCost').val(ui.values[ 0 ]);
			$('#maxCost').val(ui.values[ 1 ]);
		}
		});

		$('#minCost').val($( "#slider-range" ).slider( "values", 0 ));
		$('#maxCost').val($( "#slider-range" ).slider( "values", 1 ));

		$('#minCost').keyup(function(){
			min = $(this).val();
			$( "#slider-range" ).slider({
				values: [ min, max ]
			});
		})
		$('#maxCost').keyup(function(){
			max = $(this).val();
			$( "#slider-range" ).slider({
				values: [ min, max ]
			});
		})
		//"vertical" "horizontal"

		$('.reset_range').click(function(){
			min = 0;
			max = 10000;
			$( "#slider-range" ).slider( "option", "values", [ min, max ] );
			$('#minCost').val(min);
			$('#maxCost').val(max);
		})
		

	});
}

/* Поворот диапазона цен */
function rangeOrientation () {
	return "horizontal";
	/*$('#slider-range').css('height', '250px');
	
	if ($(document).width() > 500) {
		return "horizontal";
	}
	else {
		return "vertical";
	}*/
	
}

/*   Выпадающее меню   */

$(function() {
	var select = $('.select_block').find('.select');
	var pane = select.find('.pane');
	var li = select.find('.dropdown').find('li');
	if ($(document).width() < 535) {
		pane.click(function(){
			$(this).parent().find('.dropdown').toggleClass('open');
		})
	}
	li.click(function(){
		var content = $(this).text();
		$(this).parent().parent().find('.pane').find('span').text(content);
		if ($(document).width() < 535) {
			$(this).parent().toggleClass('open');
		}
	})
});




// Изменение размеров блоков

if ($(document).width() > 1200) {
	if( $("div").is('.resize_controls') ) {
		$(function() {

			var itemBlock = $('.item_block');
			var item = itemBlock.find('.item-1');
			var row = $('div#row');
			var table = $('div#table');

			row.click(function(){	
				if(!item.hasClass("resize")) {
					$(this).addClass('active');
					table.removeClass('active');
					item.animate({opacity:0}, '200', function(){
						item.addClass('resize')
					}).animate({opacity:1}, '200', function(){
						item.removeAttr("style")
					});
				}
			})

			table.click(function(){
				if(item.hasClass("resize")) {
					$(this).addClass('active');
					row.removeClass('active');
					item.animate({opacity:0}, '200', function(){
						item.removeClass('resize')
					}).animate({opacity:1}, '200', function(){
						item.removeAttr("style")
					});
				}
			})

		});
	}
}

/*   Галлерея  */
$(function() {
	var largeImg = $('.large_photo').find('img');
	var smallImg = $('.previews .preview img');
	var largePrev = $('.large_photo').find('.prev');
	var largeNext = $('.large_photo').find('.next');
	var images = [];
	var i = 0
	smallImg.each(function(){
	    images.push($(this));
	})
	
	largeNext.click(function(){
		images[i].parent().removeClass('changed');
		i++;
		if(i > images.length- 1) {
			i=0;
		}
		images[i].parent().addClass('changed');
		var src = images[i].attr('src');
		largeImg.fadeOut(100, function(){
			largeImg.attr('src', src)
		});
		largeImg.fadeIn(100);
	})
	largePrev.click(function(){
		images[i].parent().removeClass('changed');
		i--;
		if(i < 0) {
			i = images.length- 1;
		}
		images[i].parent().addClass('changed');
		var src = images[i].attr('src');
		largeImg.fadeOut(100, function(){
			largeImg.attr('src', src)
		});
		largeImg.fadeIn(100);

	})
	
	smallImg.click(function() {
		smallImg.parent().removeClass('changed');
		$(this).parent().addClass('changed');
		var src = $(this).attr('src');
		i = $(this).attr('data-num');
		largeImg.fadeOut(100, function(){
			largeImg.attr('src', src)
		});
		largeImg.fadeIn(100);
		

	});
});
