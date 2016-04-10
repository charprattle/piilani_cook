

// $('.grid').masonry({
//   // options...
//   itemSelector: '.grid-item',
//   columnWidth: 800
// });



$(window).load(function() {
	$('.grid-item').BalancedGallery({
            autoResize: true,                   // re-partition and resize the images when the window size changes
            background: null,                   // the css properties of the gallery's containing element
            idealHeight: null,                  // ideal row height, only used for horizontal galleries, defaults to half the containing element's height
            idealWidth: null,                   // ideal column width, only used for vertical galleries, defaults to 1/4 of the containing element's width
            maintainOrder: true,                // keeps images in their original order, setting to 'false' can create a slightly better balance between rows
            orientation: 'vertical',          // 'horizontal' galleries are made of rows and scroll vertically; 'vertical' galleries are made of columns and scroll horizontally
            padding: 14,                         // pixels between images
            shuffleUnorderedPartitions: true,   // unordered galleries tend to clump larger images at the begining, this solves that issue at a slight performance cost
            viewportHeight: null,               // the assumed height of the gallery, defaults to the containing element's height
            viewportWidth: null                 // the assumed width of the gallery, defaults to the containing element's width
        });
});



$(document).ready(function () {

    var menu = $('.navbar');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.navbar').addClass('navbar-fixed-top');
            $('.content').addClass('menu-padding');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
            $('.content').removeClass('menu-padding');
        }
    }

    document.onscroll = scroll;


    $('.aboutbutton').click(function(){

      $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);

  });

    document.onscroll = scroll;

     $('.contactbutton').click(function(){

      $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);

  });

    $('.homebutton').click(function() {
    
        if($(document).scrollTop()>290){
            console.log('scrolltop: ',$(document).scrollTop())
            $('html, body').animate({
                scrollTop: 2
            }, 1000);
        } else {
            console.log('in else statement')
        }
    });

    $('.workbutton').click(function(){

      $('html, body').animate({
        scrollTop: $("#img").offset().top
    }, 1000);

  });

$ ("#contact").hover(function(){
    $('#contact').addClass('animated pulse');
    $('#contact').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('#contact').removeClass('animated pulse');
    })
})

});