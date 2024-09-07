import IconInfo from "./IconInfo";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchProduct from "./SearchProduct";

function Header() {
  return (
    <header className=" flex justify-between items-center  min-h-16 border-b-[0.5px] border-Primary1">
      <Logo />
      <Navigation />
      <div className="flex gap-6  basis-[40%]  justify-between items-center">
        <SearchProduct />
        <IconInfo />
      </div>
    </header>
  );
}

export default Header;
