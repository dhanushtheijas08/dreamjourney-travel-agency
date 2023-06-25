import "./Sample.css";
import samImg from "./asserts/destination-images/destination-2.jpg";
const Sample = function () {
  return (
    <div class="flex relative w-fit overflow-hidden group cursor-pointer">
      <img
        src={samImg}
        alt=""
        class="w-72 block w-cover group-hover:scale-110 duration-300"
      />
      <div class="bg-gradient">sdsdsd</div>
      <h4 class="text-2xl max-w-xs text-white group-hover:text-black uppercase absolute bottom-0 pb-2 pl-2 md:pb-4 md:pl-4 duration-200">
        The curiosity
      </h4>
    </div>
  );
};

export default Sample;

{
  /*     // <div className="flex relative w-72 overflow-hidden group:cursor-pointer">
    //   <img
    //     src={samImg}
    //     className="block w-cover group-hover:scale-110 duration-300"
    //     alt=""
    //   />
    //   <div class="absolute top-0 bottom-0 left-0 right-0  bg-gradient-to-b from-transparent to-gray-900 h-full group-hover:from-gray-900  group-hover:to-gray-50  group-hover:opacity-50"></div>
    // </div> */
}
