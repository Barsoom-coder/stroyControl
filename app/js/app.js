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
    customPaging : function(slider, i) {
        return '<img src="../img/dest/choice/slide-dot.png" /><img src="../img/dest/choice/slide-dot-active.png" />';
    },
	});

});

