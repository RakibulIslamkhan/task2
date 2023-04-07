import React from "react";
import About from "@/components/About/About";
import Categories from "@/components/Categories/Categories";
import Contact from "@/components/Contact/Contact";
import Explore from "@/components/Explore/Explore";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import Offer from "@/components/Offer/Offer";


export default function Home() {
  return (
    <>
        <HeroSection/>
        <Categories/>
        <Explore/>
        <About/>
        <Offer/>
        <Contact/>
        <Footer/>
    </>
  )
}
