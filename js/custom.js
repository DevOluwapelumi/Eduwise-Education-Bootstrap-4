$(document).ready(function () {
    "use strict";

  // Preloader js
    $(window).load(function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    
    // ************ Login popup
    $('.js-modal-show').on('click' ,function(e){
        $('.js-modal-shopify').toggleClass('is-shown--off-flow').toggleClass('is-hidden--off-flow');
    });
    $('.js-modal-hide').on('click' ,function(e){
        $('.js-modal-shopify').toggleClass('is-shown--off-flow').toggleClass('is-hidden--off-flow');
    });
          


//counter
    $('.counter').counterUp({
      delay: 10,
      time: 5000
    });  
  // ************Mean Menu
    jQuery('header .main-menu').meanmenu({
        meanScreenWidth: "991"
    });
        $(".search_btn").on("click", function(event) {
            event.preventDefault();
            $("#search").addClass("open");
            $("#search > form > input[type='search']").focus();
        });

        $("#search, #search button.close").on("click keyup", function(event) {
            if (event.target == this || event.target.className == "close" || event.keyCode == 27) {
                $(this).removeClass("open");
            }
        });



//=========== Scroll to top 
    jQuery('.to-top').on('click', function(event) {
        jQuery('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 100) {
            jQuery('.to-top').fadeIn(1000);
        } else {
            jQuery('.to-top').fadeOut(1000);
        };
    });


	//Team Carousel   
    $("#team_01").owlCarousel({
        items :3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 3],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        slideSpeed: 1000,
        paginationSpeed: 1500,
        navigation : false,
        pagination : true,
        afterAction: function(el){
           //remove class active
           this
           .$owlItems
           .removeClass('active')

           //add class active
           this
           .$owlItems //owl internal $ object containing items
           .eq(this.currentItem + 0)
           .addClass('active')    
        } 
    });


    // Special Package
    $("#related_courses").owlCarousel({
        navigationText :["<i class='flaticon-left-arrow-1'></i>", "<i class='flaticon-right-arrow'></i>"],
        items : 3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 2],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        slideSpeed: 1000,
        paginationSpeed: 1500,
        navigation : true,
        pagination : false,
    }); 



    $('#testimonial').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      customPaging: function(slider, i) {
          return '<div class="pager_item" id=' + i + "></div>";
        }
    });

    $('.testimonial_wrapper_4').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      customPaging: function(slider, i) {
          return '<div class="pager_item" id=' + i + "></div>";
        }
    });
        
    //Testimonial Carousel (Hosting)
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: "",
        nextArrow: "",
        dots: true,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        fade: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3
              }
            }
        ]
    }); 


    //Video Popup   
    $('.video-iframe').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }
    }); 

	//WOW JS
		new WOW().init();

   
});

