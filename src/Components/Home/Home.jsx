import Header from "./Header/Header";
import HeroSection from "./Hero Section/HeroSection";
import "./Home.css";
import { useEffect, useRef, useState } from "react";
const Home = function () {
  const myRef = useRef();
  const [isElementVisiable, setIsElementVisiable] = useState(true);
  useEffect(() => {
    let observerCallback = function (entries) {
      console.log(entries[0].isIntersecting);
      if (entries[0].isIntersecting) {
      }
    };
    let observerOptions = { root: null, threshold: 0.1 };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(myRef.current);
  }, []);
  return (
    <div className="h-screen home-section py-4" ref={myRef}>
      <HeroSection />
    </div>
  );
};

export default Home;
