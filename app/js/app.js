import $ from 'jquery';
window.jQuery = $;
window.$ = $; // import module example (npm i -D jquery)
// require('./other_script.js') // Require Other Script(s) from app/js folder Example
import slick from 'slick-carousel';


document.addEventListener('DOMContentLoaded', () => {

	$('.choice__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'linear',
		arrows: false,
		dots: true,
		customPaging: function (slider, i) {
			return '<img src="../img/dest/choice/slide-dot.png" /><img src="../img/dest/choice/slide-dot-active.png" />';
		},
	});

	$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
				$('.hamburger').addClass('hamburger--active');
				$('.drawer-list').addClass('drawer-list--active');
        $('body').addClass('fixedPosition');
    } else {
			$(this).prop("disabled", false);
			$('.hamburger').removeClass('hamburger--active');
				$('body').removeClass('fixedPosition');
				$('.drawer-list').removeClass('drawer-list--active');
    }
});

$('.scrolled').click(function(event){
	event.preventDefault();
	var id = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});

$('.menu__link').click(function(e){
		$("input:checkbox").prop("disabled", true);
		$('.drawer-list').toggleClass('drawer-list--active');
		$('body').toggleClass('fixedPosition');
		$('.hamburger').removeClass('hamburger--active');
});

});

