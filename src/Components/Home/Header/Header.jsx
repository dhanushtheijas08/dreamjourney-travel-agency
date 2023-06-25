import HeaderBtn from "./HeaderBtn";
import NavBar from "./NavBar";

const style = {
  border: "1px solid rgb(235, 238, 241)",
  backgroundColor: "rgba(255, 238, 238, 0.5)",
  backdropFilter: "blur(10px)",
  position: "sticky",
  top: "20px",
};
const Header = function () {
  return (
    <header
      className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center text-darkblue rounded-full z-30"
      style={style}
    >
      <h2 className="text-3xl font-bold text-darkblue ml-3 pb-1">
        Dream Journey
      </h2>
      <NavBar />
      <HeaderBtn />
    </header>
  );
};

export default Header;
