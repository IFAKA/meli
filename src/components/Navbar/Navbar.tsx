import { NavLogo } from "../NavLogo"
import { SearchBar } from "../SearchBar"

const Navbar = () => {
  return (
    <div className="py-2 fixed top-0 w-full flex justify-center items-center bg-[#FFE600]">
      <div className="flex sm:gap-8 gap-4 w-full px-4 max-w-6xl">
        <NavLogo />
        <SearchBar />
      </div>
    </div>
  )
}

export default Navbar
