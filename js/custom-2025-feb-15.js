/* Safety Sciences Advantage Slider */
$( document ).ready(function() {

    $(".access-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover:true,
        responsive: [
          {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true
          }
          },
          {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ]
      });

      /********************** Tooltip *********************/
      $('[data-toggle="tooltip"]').tooltip();


      /********************** wow animation *********************/
      // wow animation off on Mobile
     /* wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false,       // default
        live:         true        // default
      }
      )
      wow.init(); */

});
