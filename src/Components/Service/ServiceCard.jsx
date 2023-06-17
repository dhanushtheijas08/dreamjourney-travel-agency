const ServiceCard = function ({ icon, title, content, style }) {
  return (
    <div
      className={`px-5 py-8 bg-service-box-1 rounded-xl w-56 shadow hover:shadow-md cursor-pointer ${style}`}
    >
      <img src={icon} alt="icon" className="h-10" />
      <strong className="text-xl mt-5 block font-medium text-darkblue">
        {title}
      </strong>
      <p className="text-gray text-sm mt-1">{content}</p>
    </div>
  );
};

export default ServiceCard;
