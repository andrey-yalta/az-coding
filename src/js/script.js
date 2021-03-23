// // при нажатии на мобильный навбар открывать обычный навбар
// $("#navbar-mobile__logo").click(function(){
// $("#navbar").toggleClass("show_navbar");
// });
document.querySelector("#navbar-mobile__logo").addEventListener("click",()=>{
	document.querySelector("#navbar").classList.toggle("show_navbar")
})
// $(document).ready(function() {
// 			// grab the initial top offset of the navigation
// 		   	var stickyNavTop = $('.navbar-mobile').offset().top;
//
// 		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
// 		   	var stickyNav = function(){
// 			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
//
// 			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
// 			    // otherwise change it back to relative
// 			    if (scrollTop > stickyNavTop) {
// 			        $('.navbar-mobile').addClass('sticky');
// 			    } else {
// 			        $('.navbar-mobile').removeClass('sticky');
// 			    }
// 			};
//
// 			stickyNav();
// 			// and run it again every time you scroll
// 			$(window).scroll(function() {
// 				stickyNav();
// 			});
// 		});

// $(document).ready(function() {
//   // функция фиксирования навбара при прокрутке
//
// 			// grab the initial top offset of the navigation
// 		   	var stickyNavTop = $('.navbar').offset().top;
//
// 		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
// 		   	var stickyNav = function(){
// 			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
//
// 			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
// 			    // otherwise change it back to relative
// 			    if (scrollTop > stickyNavTop) {
// 			        $('.navbar').addClass('sticky');
// 			    } else {
// 			        $('.navbar').removeClass('sticky');
// 			    }
// 			};
//
//
// 			stickyNav();
// 			// and run it again every time you scroll
// 			$(window).scroll(function() {
// 				stickyNav();
// 			});
// 		});

// JavaScript SLIDER
document.addEventListener('DOMContentLoaded', function() {
	// получаем корневой элемент слайдера
	const $slider = document.querySelector('[data-slider="chiefslider"]');
	new ChiefSlider($slider, {
		loop: false // без зацикливания
	 });
});

// функция анимации первого экрана
particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":315.65905665290904}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.47300655795532925,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
