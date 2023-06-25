const ExperienceCard = function ({ title, content, id }) {
  return (
    <div
      className={`px-4 py-8 bg-service-box-${id} rounded-xl shadow hover:shadow-md cursor-pointer space-y-1`}
    >
      <strong className="text-4xl block font-semibold text-purple">
        {title}
      </strong>
      <p className="text-gray text-sm">{content}</p>
    </div>
  );
};

export default ExperienceCard;
