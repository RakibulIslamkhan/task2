import React, { useEffect } from "react";
import Aos from "aos";
import { BsXLg } from "react-icons/bs";
export default function HeroSection() {
  const [popup, setPopUp] = React.useState(false);
  useEffect(() => {
    Aos.init();
    const timer = setTimeout(() => {
      setPopUp(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  setTimeout(() => {}, 1000);
  return (
    <section className="flex px-52 sm:px-4 h-[500px] sm:h-full items-center justify-between sm:flex-col sm:gap-8 sm:pt-8 bg-[#D9CAF3] dark:bg-dark relative">
      <div
        className="w-8/12 sm:w-full"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <h3 className="text-5xl sm:text-3xl text-blue mb-8">
          Good design makes great business
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
      <div
        className="w-7/12 sm:w-full"
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <img src="../hero-bg.png" alt="bg" className="h-full w-full" />
      </div>
        {popup && (
          <div className="bg-light text-black p-4 w-3/12 sm:w-10/12 absolute right-0 bottom-0">
            <h3>Welcome to Techport</h3>
            <p style={{ margin: "1rem 0" }}>
              Showcase your work.Find new inspiration,hand-picked just for you.
            </p>
            <button
              type="button"
              style={{
                borderRadius: "10px",
                padding: "4px 8px",
                background: "#630EB2",
                color: "#fff",
                border: "none",
              }}
            >
              Sign in with Google
            </button>
            <BsXLg
              className={`relative bottom-32 left-72 cursor-pointer sm:left-64${popup ? " hidden" : ""}}`}
              size="0.8rem"
              onClick={() => setPopUp(false)}
            />
          </div>
        )}
    </section>
  );
}
