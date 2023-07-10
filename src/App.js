import './App.css';
import Destinations from './Components/Destinations/Destinations';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Header from './Components/Home/Header/Header';
import Home from "./Components/Home/Home"
import PhotoGallery from './Components/PhotoGallery/PhotoGallery';
import Service from './Components/Service/Service';
import Sample from './Sample';


function App() {
  return (
    <div className="App bg-primary">
      <Header />
      <Home />
      <Service />
      <Destinations />
      <PhotoGallery />
      <Experience />
      <Footer />
      {/* <Sample /> */}
    </div>
  );
}

export default App;
