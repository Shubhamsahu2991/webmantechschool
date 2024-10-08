/*! landingv3.js | Bulkit | CSS Ninja */

/* ==========================================================================
Landing kit 4 JS file 
========================================================================== */

$(document).ready(function($) {

    "use strict";

    //Toggle between light and dark logo when solid navbar comes in
    $(window).on('scroll', function() { // this will work when your window scrolled.
        var height = $(window).scrollTop(); //getting the scrolling height of window
        if (height > 80) {
            $("img.light-logo").attr("src", "assets/images/logos/bulkit-blue.svg");
        } else {
            $("img.light-logo").attr("src", "assets/images/logos/bulkit-white.svg");
        }
    });
    //Contact toggler
    $('.tabbed-links li').on('click', function() {

        var target = $(this).attr('data-contact');

        $('.contact-block').addClass('is-hidden');
        $('#' + target).removeClass('is-hidden');

        $('.tabbed-links li.is-active').removeClass('is-active');
        $(this).addClass('is-active');
    })

    if ($('.switch-pricing-wrapper').length) {
        $('.pricing-switcher input').on('change', function() {
            $('.plan-price').toggleClass('is-active');
        })
    }
    //Toggle the sign up button color when solid navbar comes in
    if ($('.navbar-light').length) {
        $(window).on('scroll', function() { // this will work when your window scrolled.
            var height = $(window).scrollTop(); //getting the scrolling height of window
            if (height > 80) {
                $('.button-signup').removeClass('light-btn').addClass('primary-btn');
            } else {
                $('.button-signup').removeClass('primary-btn').addClass('light-btn');
            }
        });
    }
    if ($('.is-title-reveal, .is-feature-reveal ').length) {
        //Scroll reveal definitions
        window.sr = ScrollReveal();

        // Simple reveal
        sr.reveal('.is-title-reveal', {
            origin: 'bottom',
            distance: '20px',
            duration: 1000,
            delay: 200,
            rotate: {
                x: 0,
                y: 0,
                z: 0
            },
            opacity: 0,
            scale: 1,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            container: window.document.documentElement,
            mobile: true,
            reset: false,
            useDelay: 'always',
            viewFactor: 0.2,

        });

        // Revealing features
        sr.reveal('.is-feature-reveal', {
            origin: 'bottom',
            distance: '20px',
            duration: 1000,
            delay: 200,
            rotate: {
                x: 0,
                y: 0,
                z: 0
            },
            opacity: 0,
            scale: 1,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            container: window.document.documentElement,
            mobile: true,
            reset: true,
            useDelay: 'always',
            viewFactor: 0.2,

        }, 360);
    }
    //Clone the original video
    var video = $('#video-embed').clone();

    //Destroy the video instance on modal close and replace it with the clone
    $('.stop-video').on("click", function() {
        var $this = $('#video-modal').find('iframe'),
            tempSrc = $this.attr('src');
        $this.attr('src', "");
        $('#video-embed').remove();

        setTimeout(function() {
            $('.background-wrapper').append(video);
            Video('#video-embed');
        }, 1000);
    })

    //Pricing switcher toggle
    $('#price-switch').on("click", function() {
        $('.by-year, .by-month').toggleClass('is-active');
        $('.condensed-plan').toggleClass('is-switched');
    })

})