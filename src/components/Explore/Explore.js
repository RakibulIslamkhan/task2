import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Aos from "aos";

const imgList = [
  { id: 1, img: "../slide1.png", title: "Logo & branding design" },
  { id: 2, img: "../slide2.png", title: "Website & App design" },
  { id: 3, img: "../slide3.png", title: "Social media design" },
  { id: 4, img: "../slide4.png", title: "Print design" },
  { id: 5, img: "../slide5.png", title: "Packaging design" },
  { id: 1, img: "../slide1.png", title: "Logo & branding design" },
  { id: 2, img: "../slide2.png", title: "Website & App design" },
  { id: 3, img: "../slide3.png", title: "Social media design" },
  { id: 4, img: "../slide4.png", title: "Print design" },
  { id: 5, img: "../slide5.png", title: "Packaging design" },
];
const PrevButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    >
      <IoIosArrowBack color="white" size={40} />
    </div>
  );
};

const NextButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IoIosArrowForward color="white" size={40} />
    </div>
  );
};
export default function Explore() {
  useEffect(() => {
    Aos.init();
  }, []);
  let settings = {
    dots: false,
    infinite: true,
    className: "slick-track",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoPlay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  return (
    <section className="px-52 pt-5 sm:px-4 h-[400px] flex justify-center flex-col sm:h-full sm:py-8 bg-[#DBCDF4] dark:bg-dark">
      <div
        className="explore-title"
      >
        <h3 className="mb-5 text-2xl font-bold">Explore Designs Picked for you</h3>
      </div>
      <div data-aos="fade-right"
            data-aos-easing="linear">
        <Slider {...settings} className="flex gap-5">
          {imgList.map((item) => (
            <div key={item.id} className="h-[160px] w-[170px] text-center sm:w-full sm:h-[300px] sm:my-6">
              <img src={item.img} alt="" className="w-full h-full rounded-md" />
              <p className="text-center">National Park</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
