const DestinationsCard = function ({ country, caption, image }) {
  return (
    <section className="max-w-fit font-pop mt-12">
      <div className="relative max-w-fit max-h-fit">
        <img
          src={image}
          alt="destination images"
          className="h-80 rounded-2xl"
        />
        <span className="text-purple font-semibold bg-white py-1 px-2 text-sm rounded-full absolute top-4 right-4">
          {country}
        </span>
        {/* <span className="text-purple font-semibold bg-white py-1 px-2 text-sm rounded-full absolute top-4 right-4">
          $450
        </span> */}
      </div>
      <p className="w-64 text-center font-medium mt-4 mx-auto text-xl text-darkblue">
        {caption}
      </p>
    </section>
  );
};

export default DestinationsCard;
