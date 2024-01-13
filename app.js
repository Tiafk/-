const slider = new Swiper('.video_slide .swiper', {
	direction: 'vertical',
	slidesPerView: 1,
	mousewheel: true,
});

const pageSlider = new Swiper ('.page', {
	wrapperClass: '.page__wrapper',
	slideClass: '.page__screen',
	
	direction: 'vertical',

	slidesPerView: 2,

	parallax: true,

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	mousewheel: 1,

	watchOverflow: true,

	speed: 800,

	observer: true,
	observerParents: true,
	observerSlideChildren: true,

	// pagination: {
	// 	el: '.page__pagination',
	// 	type: 'bullets',
	// 	clickable: true,
	// 	bulletActiveClass: '.page__bullet_active',
	// },
});