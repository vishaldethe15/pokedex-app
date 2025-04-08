import Logo from "./Logo";
import SearchBar from "./Searchbar";

const Navbar = () => {
  return (
    <nav className=" w-full bg-white py-2 px-4 flex flex-row justify-between items-center">
      <Logo />
      <SearchBar />
    </nav>
  );
};

export default Navbar;
