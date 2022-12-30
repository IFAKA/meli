import { useInput } from "@/hooks"
import searchIcon from "../../assets/ic_Search.webp"

const SearchBar = () => {
  const { handleSubmit, value, handleChange } = useInput()
  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full rounded-sm overflow-hidden"
    >
      <input
        value={value}
        onChange={handleChange}
        className="relative w-full pt-1.5 pb-2 pl-3.5 pr-14 text-lg font-normal focus:outline-none bg-white"
        placeholder="Nunca dejes de buscar"
      />
      <button
        name="Search"
        className="h-full px-3 bg-[#eeeeee] absolute right-0"
      >
        <img src={searchIcon} alt="Search icon" />
      </button>
    </form>
  )
}
export default SearchBar
