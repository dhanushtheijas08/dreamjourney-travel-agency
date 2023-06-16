import Header from "./Header/Header";
import HeroSection from "./Hero Section/HeroSection";
import "./Home.css";
const Home = function () {
  return (
    <div className="h-screen home-section py-4">
      <Header />
      <HeroSection />
    </div>
  );
};

export default Home;
