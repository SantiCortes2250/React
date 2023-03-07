const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 8000,
  cssEase: "linear",
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
};


export default settings;
