const HeroSectionText = function () {
  return (
    <div className="font-pop max-w-lg mt-20">
      <span className="px-4 py-2 text-coral rounded-full bg-lightcoral">
        Explore The World 🧳
      </span>
      <h2 className="text-6xl font-medium text-darkblue mt-6">
        It's a Big World Out There, Go Explore
      </h2>
      <p className="text-gray mt-5 max-w-md tracking-[0.045rem]">
        We always make our customer happy by providing as many choice as
        possible
      </p>

      <div className="mt-10">
        <button className="bg-red text-white px-5 py-3 rounded-full">
          Plane a Trip {">"}
        </button>
      </div>
    </div>
  );
};

export default HeroSectionText;
