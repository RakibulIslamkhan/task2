import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
// import "aos/dist/aos.css";
const imgList = [
  { id: 1, img: "../cate1.png", title: "Logo & branding design" },
  { id: 2, img: "../cate2.png", title: "Website & App design" },
  { id: 3, img: "../cate3.png", title: "Social media design" },
  { id: 4, img: "../cate4.png", title: "Print design" },
  { id: 5, img: "../cate5.png", title: "Packaging design" },
];
export default function Categories() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="px-52 sm:px-4 h-[350px] sm:h-full py-8 bg-[#C4ADEB] dark:bg-dark">
      <div className="flex justify-between sm:flex-col">
        <h3 className="text-3xl sm:text-xl font-bold sm:mb-4">Design for what you need</h3>
        <div className="flex items-center">
          <h4 >View all design categories</h4>
          <BsChevronDoubleRight />
        </div>
      </div>
      <div className="flex items-center justify-between sm:flex-col gap-4 mt-8">
        {imgList.map((item) => (
          <div
            className="h-[160px] w-[170px] text-center sm:w-full sm:h-[300px] sm:my-6"
            data-aos="fade-right"
            data-aos-easing="linear"
            key={item.id}
          >
            <img src={item.img} alt="" className="w-full h-full rounded-md" />
            <p className="mt-5 sm:text-2xl">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
