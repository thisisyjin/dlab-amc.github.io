$(document).ready(function () {
  if ($(window).width() > 480) {
    // Initialize Slick slider only if the window width is greater than 480px
    $(".blog-slider").slick({
      dots: true,
      infinite: true,
      mobileFirst: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true, // Show arrows for navigation
      autoplay: true,
      autoplaySpeed: 3500, // Adjust the speed as needed
      pauseOnHover: true,
      lazyLoad: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});

$(document).ready(function () {
  if ($(window).width() > 480) {
    // Initialize Slick slider only if the window width is greater than 480px
    $(".img-slider").slick({
      infinite: true, // Allows infinite looping
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true, // Show arrows for navigation
      autoplay: true, // Enables auto-sliding
      autoplaySpeed: 3500, // Time interval for auto-sliding
      pauseOnHover: true, // Pause when hovering over a slide
      lazyLoad: "ondemand", // Lazy load the images
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});
