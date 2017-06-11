// Mobile navigation animation
(function() {
    var mobileNav = $('.mobile-nav');
    var hamburger = $('.mobile-button div');
    $('.mobile-button').click(function(){
        $(hamburger[0]).toggleClass('rotate-right');
        $(hamburger[1]).toggleClass('hidden');
        $(hamburger[2]).toggleClass('rotate-left');
        mobileNav.slideToggle(300);
    })
})();

// Initialize Swiper
(function() {
    var swiper = new Swiper('.swiper2', {
        paginationClickable: true,
        direction: 'horizontal',
        slidesPerView: 'auto',
        loop: true,
        grabCursor: true,
        paginationClickable: true,
        nextButton: '.swiper-next',
        prevButton: '.swiper-prev'
    });
})();

// Parallax
(function() {
    $('.quote-container').mousemove(function(e){
        var quote = $('.quote-container .quote');
        var background = $('.quote-container .background')
        var girl = $('.quote-container .girl')

        var moveX = ((window.innerWidth/2 - e.clientX)/4);
        var moveY = ((window.innerHeight/2 - e.clientY)/4);
        var scale = 1-(moveY / 1000);

        quote.css({"transform": "translate(-50%, -50%) translate3d("+ moveX/5 + "px," + moveY/5 + "px, 0px )"});
        background.css({"transform": "translate3d("+ -moveX/15 + "px," + -moveY/15 + "px, 0px )"});
        girl.css({"transform": "scale("+ scale +")" + "translate3d("+ moveY/2 + "px," + -moveY/2 + "px, 0px )"});
    });

})();
