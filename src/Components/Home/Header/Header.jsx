import HeaderBtn from "./HeaderBtn";
import NavBar from "./NavBar";

const Header = function () {
  return (
    <header className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center text-darkblue rounded-full">
      <h2 className="text-3xl font-bold text-darkblue">Dream Journey</h2>
      <NavBar />
      <HeaderBtn />
    </header>
  );
};

export default Header;
