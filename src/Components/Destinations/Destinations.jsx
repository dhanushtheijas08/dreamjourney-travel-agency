import DestinationsCard from "./DestinationsCard";

import des1 from "../../asserts/destination-images/destination-1.jpg";
import des2 from "../../asserts/destination-images/destination-2.jpg";
import des3 from "../../asserts/destination-images/destination-3.jpg";
import des4 from "../../asserts/destination-images/destination-4.jpg";
import des5 from "../../asserts/destination-images/destination-5.jpg";
import des6 from "../../asserts/destination-images/destination-6.jpg";

const destinationData = [
  {
    country: "Paris, France",
    caption: "Fall in love with the City of Love",
    path: des1,
  },
  {
    country: "Rome, Italy",
    caption: "Unveiling the ancient wonders of Rome",
    path: des2,
  },
  {
    country: "Cape Town, South Africa",
    caption: "Experience the breathtaking beauty of Cape Town",
    path: des3,
  },
  {
    country: "Tokyo, Japan",
    caption: "Step into the future: Explore the wonders of Tokyo",
    path: des4,
  },
  {
    country: "Sydney, Australia",
    caption: "Embrace the vibrant spirit of Sydney, Australia",
    path: des5,
  },
  {
    country: "Cairo, Egypt",
    caption: "Journey through time: Uncover the mysteries of Cairo",
    path: des6,
  },
];

const Destinations = function () {
  const places = destinationData.map((place) => (
    <DestinationsCard
      country={place.country}
      caption={place.caption}
      image={place.path}
    />
  ));

  return (
    <section className="bg-primary font-pop px-16 py-10">
      <div className="text-center">
        <span className="text-purple font-medium tracking-wider text-lg">
          TOP DESTINATIONS
        </span>
        <h3 className="text-4xl font-medium">Explore Top Destinations</h3>
      </div>

      <div className="grid grid-cols-3 place-content-center place-items-center space-y-12 max-h-fit mt-10">
        {places}
      </div>
    </section>
  );
};

export default Destinations;
