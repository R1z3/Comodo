$('.owl-carousel').owlCarousel({
    items: 1,
    stagePadding: 100,
    nav: true,
    navContainerClass: 'owl-nav cd-our-projects-carousel',
    navText: ['<div class="cd-carousel-left-arrow"></div>', '<div class="cd-carousel-right-arrow"></div>'],
}).on('changed.owl.carousel', function(event) {
    // console.log(event.item.index);
    // console.log(event.item.count);
})