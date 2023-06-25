import ExperienceCard from "./ExperienceCard";

const experienceCardData = [
  { id: "1", title: "20", content: "Years Of Experience" },
  { id: "2", title: "480+", content: "Destination Collaborations" },
  { id: "3", title: "85k+", content: "Happy Customers" },
];

const TextContentTitle = function () {
  let cards = experienceCardData.map((card) => (
    <ExperienceCard id={card.id} title={card.title} content={card.content} />
  ));
  return (
    <div className="text-center font-pop mt-16 flex flex-col items-center bg-d w-3/5 gap-12">
      <div className="mt-16">
        <span className="text-purple font-medium tracking-wider text-lg uppercase ">
          OUR EXPERIENCE
        </span>
        <h3 className="text-4xl font-medium max-w-md mt-2">
          With Our Experience We Will Serve You
        </h3>
      </div>
      {/* <p className="text-gray max-w-md text-left">
        Since we first opened we have always prioritized the convenience of our
        users by providing low price and with a easy process
      </p> */}
      <div className="flex justify-evenly w-full">{cards}</div>
    </div>
  );
};

export default TextContentTitle;
