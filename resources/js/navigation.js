$(document).ready(function() {
    
    // MAKES BUTTON TO WORK AND DISPLAYS MOBILE NAVIGATION \\
    $(".navigation__menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    })

    // NAVIGATION ON SCROLL SETUP \\
    $(window).on("scroll", function() {
        if($(window).scrollTop()) {
            $('nav').addClass('scroll');
        }

        else {
            $('nav').removeClass('scroll');
        }
    })

});