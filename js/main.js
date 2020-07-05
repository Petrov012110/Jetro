$(function(){

    $('.slider__inner').slick({
        // slidesToShow: 1,
        // slidesToScroll: 1,
        arrows: true,
        asNavFor: '.thumbs',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/previous.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/next.svg" alt=""></button>',
    });
      $('.thumbs').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider__inner',
        dots: false,
        focusOnSelect: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 970,
            settings: {
              slidesToShow: 5,
              centerMode: true,
            }
          },
          {
            breakpoint: 835,
            settings: {
              slidesToShow: 4,
              centerMode: true,
            }
          },
          {
            breakpoint: 700,
          settings: {
            slidesToShow: 3,
            centerMode: true,
          }
        },
        {
          breakpoint: 545,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
      breakpoint: 410,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    },
        ]
      });
      $('.header__menu-btn').on('click', function(){
        $('.header__menu > ul').slideToggle();
        $('.header__menu-row').toggleClass('active');
    });

});