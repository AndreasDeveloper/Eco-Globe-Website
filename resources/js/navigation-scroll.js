/* ------------------------------------------- */
/* NAVIGATION ON SCROLL SETUP 
/* ------------------------------------------- */

$(document).ready(function() {

    $(window).on('scroll', function(){
        if($(window).scrollTop()) {
            $('.navigation').addClass('scroll');
        }
        else {
            $('.navigation').removeClass('scroll');
        }
    })




    
     /* Sticky Navigation Setup */ /*
     $('.js--section-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
       offset: '60px;'
    }); */

    // ACTUAL MOBILE NAVIGATION \\
    $('.js--nav-icon use').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon use');

        nav.slideToggle(200);

        if  (mobile-nav-icon.hasClass('icon-mob')) {
            mobile-nav-icon.removeClass('icon-mob');
        } else {
            mobile-nav-icon.addClass('icon-mob');
            mobile-nav-icon.removeClass('icon-mob');
        }
    });
    
});