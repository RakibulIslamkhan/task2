import React from "react";
// import "./Contact.css";
import { useEffect } from "react";
import Aos from "aos";
// import "aos/dist/aos.css";
export default function Contact() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="px-52 sm:px-4 py-12 bg-[#EEE8FA] dark:bg-dark">
      <div className="flex justify-between items-center">
        <div className="w-10/12 sm:w-6/12">
        <h3 className="text-center sm:text-left text-2xl sm:text-xl">
          How it <span className="dark:text-[#50B8DC]">works</span>
        </h3>
        </div>
        <div>
          
        <a
          href="/"
          style={{
            background: "#D6505B",
            borderRadius: "20px",
            padding: "4px 8px",
            color: "#fff",
          }}
        >
          Contact Us
        </a>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex relative before:border-[3px] before:absolute before:h-full before:left-11 before:top-12">
          <div className="translate-y-5">
            <h3 className="flex relative before:bg-[#f8147e] before:z-10 before:absolute before:h-6 before:w-6 before:rounded-full before:left-9 before:top-[5px] after:bg-[#a29d9d] after:h-8 after:w-8 after:rounded-lg after:absolute after:left-8">01</h3>
          </div>
          <div
            className="border-gray relative border-1 border-solid rounded-[38px] bg-[#c4adeb] pl-40 pr-10 sm:pl-4 py-5 w-90 sm:w-full sm:rounded-none sm:pr-4 ml-16 mb-8"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <h3 className="mb-1 text-xl">Create design Project</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="flex relative before:border-2 before:absolute before:h-full before:left-12 before:top-12">
          <div className="translate-y-5">
            <h3  className="mt-5 flex relative before:bg-[#f8147e] before:z-10 before:absolute before:h-6 before:w-6 before:rounded-full before:left-9 before:top-[5px] after:bg-[#a29d9d] after:h-8 after:w-8 after:rounded-lg after:absolute after:left-8">02</h3>
          </div>
          <div
            className="border-gray relative border-1 border-solid rounded-[38px] bg-[#c4adeb] pl-40 pr-10 sm:pl-4 py-5 w-90 sm:w-full sm:rounded-none sm:pr-4 ml-16 mb-8"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <h3  className="mb-1 text-xl">Create design Project</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="translate-y-5">
            <h3 className="mt-5 flex relative before:bg-[#f8147e] before:z-10 before:absolute before:h-6 before:w-6 before:rounded-full before:left-9 before:top-[5px] after:bg-[#a29d9d] after:h-8 after:w-8 after:rounded-lg after:absolute after:left-8">03</h3>
          </div>
          <div
            className="border-gray relative border-1 border-solid rounded-[38px] bg-[#c4adeb] pl-40 pr-10 sm:pl-4 py-5 w-90 sm:w-full sm:rounded-none sm:pr-4 ml-16"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <h3  className="mb-1 text-xl">Create design Project</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
