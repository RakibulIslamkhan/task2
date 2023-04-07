import React, { useEffect } from "react";
// import "./About.css";
import Aos from "aos";
// import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="flex px-52 sm:px-4 h-[500px] sm:h-full items-center justify-between sm:flex-col-reverse sm:gap-8 sm:pt-8 gap-8 bg-[#C4ADEB] dark:bg-dark">
      <div
      className="w-8/12 sm:w-full"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <img src="../About.png" alt="bg" className="h-full w-full" />
    </div>
    <div
      className="w-8/12 sm:w-full"
      data-aos="fade-left"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <h3 className="text-4xl sm:text-3xl text-center mb-8">
      About Our Site
      </h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
      </p>
    </div>
  </section>
  );
}
