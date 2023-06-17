import icon1 from "../../asserts/service-section/service-icon-1.svg";
import icon2 from "../../asserts/service-section/service-icon-2.svg";
import icon3 from "../../asserts/service-section/service-icon-3.svg";
import ServiceCard from "./ServiceCard";

const serviceContent = [
  {
    icon: icon1,
    title: "Lot Of Choices",
    content: "Total 450+ destinations that we work with.",
    style: "bg-service-box-1",
  },
  {
    icon: icon2,
    title: "Best Tour Guide",
    content: "Our tour guide with 35+ years of experience.",
    style: "bg-service-box-2  translate-y-10",
  },
  {
    icon: icon3,
    title: "Easy Booking",
    content: "with an easy and fast ticket purchase process.",
    style: "bg-service-box-3",
  },
];

const Service = function () {
  let cards = serviceContent.map((card) => (
    <ServiceCard
      icon={card.icon}
      title={card.title}
      content={card.content}
      style={card.style}
    />
  ));

  return (
    <section className="bg-primary flex font-pop p-16">
      <div className="flex flex-col max-w-xs">
        <span className="text-purple uppercase tracking-wider">
          WHAT WE SERVE
        </span>
        <h3 className="text-4xl font-medium mt-5 text-darkblue">
          Top Value For You
        </h3>
        <p className="text-gray text-sm lg:w-52 mt-1">
          Try a variety of benefits when using our service
        </p>
      </div>

      <div className="flex w-full justify-evenly">{cards}</div>
    </section>
  );
};

export default Service;
