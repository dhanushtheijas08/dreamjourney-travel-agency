const NavBar = function () {
  return (
    <nav>
      <ol className="flex font-pop text-lg gap-6">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ol>
    </nav>
  );
};
export default NavBar;
