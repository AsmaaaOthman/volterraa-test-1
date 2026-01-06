(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('fixed-top').css('padding', '0');
        } else {
            $('.nav-bar').removeClass('fixed-top').css('padding', '0px 90px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
/*         animateOut: 'rotateOutUpRight',
        animateIn: 'rotateInDownLeft', */
        animateOut: 'zoomOut',
        animateIn: 'zoomIn',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    $('.services-carousel').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 800,
        navText: [
            '<span class="owl-nav-prev"><i class="fas fa-chevron-left"></i></span>',
            '<span class="owl-nav-next"><i class="fas fa-chevron-right"></i></span>'
        ],
        responsive:{
            0:{ items:1 },
            768:{ items:2 },
            1200:{ items:3 }
        }
    });

    $('.custom-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 800,

        navText: [
            '<span class="owl-nav-prev"><i class="fas fa-chevron-left"></i></span>',
            '<span class="owl-nav-next"><i class="fas fa-chevron-right"></i></span>'
        ],

        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
            1025: {
                items: 4
            }
        }
    });

  
/*     $(".owl-carousel.logo-wrapper").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        smartSpeed: 300,
        center: false,
        navText: [
            '<span class="owl-nav-prev"><i class="fas fa-chevron-left"></i></span>',
            '<span class="owl-nav-next"><i class="fas fa-chevron-right"></i></span>'
        ],
        responsive: {
            0: { items: 2 },
            576: { items: 3 },
            768: { items: 4 },
            992: { items: 5 },
            1200: { items: 6 },
        }
    }); */


    $(".owl-carousel.logo-wrapper").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000, 
        autoplayHoverPause: false,
        smartSpeed: 500,       
        center: false,
        responsive: {
            0: { items: 2 },
            576: { items: 3 },
            768: { items: 4 },
            992: { items: 5 },
            1200: { items: 6 },
        }
    });

    $('.sidebar-client-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2500,
        dots: false,
        nav: false,
        responsive: {
            0: { items: 2 },
            768: { items: 3 },
            992: { items: 1 }
        }
    });


    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', () => {
            const form = icon.closest('form');
            const passwords = form.querySelectorAll('.password');
            passwords.forEach(input => {
                input.type = (input.type === 'password') ? 'text' : 'password';
            });

            icon.classList.toggle('fa-eye-slash');
            icon.classList.toggle('fa-eye');
        });
    });

    

})(jQuery);

