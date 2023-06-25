import insta from "../../asserts/footer/instagram.png";
import facebook from "../../asserts/footer/facebook.png";
import twitter from "../../asserts/footer/twitter.png";
import sendBtn from "../../asserts/footer/send.png";
import FooterLinks from "./FooterLinks";

const allLinks = [
  {
    title: "About",
    links: ["About Us", "Features", "News", "Menu"],
  },
  {
    title: "Company",
    links: ["Why Company", "Partner With Us", "FAQ", "Blog"],
  },
  {
    title: "Support",
    links: [
      "Account",
      "Support Center",
      "Feedback",
      "Contact Us",
      "Accessibility",
    ],
  },
];



  return (
    <footer className="bg-primary font-pop px-16 py-32 flex">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-darkblue">DreamJourney</h2>
        <p className="max-w-sm text-gray opacity-90">
          We always make our coustomer happy
        </p>
        <div className="flex gap-7 cursor-pointer mt-4">
          <img src={insta} alt="" className="hover:-translate-y-2 h-7" />
          <img src={facebook} alt="" className="hover:-translate-y-2 h-7" />
          <img src={twitter} alt="" className="hover:-translate-y-2 h-7" />
        </div>
      </div>
      <div className="flex justify-evenly w-full">{footerLinks}</div>

      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold text-darkblue">Get In Touch</h2>
        <p className="max-w-sm text-gray opacity-90">
          Quetions Or Feedback? we'd love to hear from you .
        </p>
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Email Id"
            className="rounded-full border-2 border-opacity-50 border-[#f2d3d3] focus:outline-none py-2 px-4 bg-primary"
          />
          <button className="absolute top-1/2 -translate-y-1/2 right-3">
            <img src={sendBtn} alt="send button" className="h-6 z-10" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
