$('.owl-carousel').owlCarousel({
    loop:true, /* ficar em loop as imagens sem parar na ultima */
    margin:20, /*separaºao entre imagens */
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})