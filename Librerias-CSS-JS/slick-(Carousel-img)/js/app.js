
$(document).ready(function(){
    $('.cont-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
    })

    
    //Modificando texto a los botones ( prev(<) - next(>) )
    const anterior = document.querySelector('.slick-prev');
    const siguiente = document.querySelector('.slick-next');

    anterior.innerHTML = '&#x3C;';
    siguiente.innerHTML = '&#x3E;';
    
});


