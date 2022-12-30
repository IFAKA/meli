import { useNavigate } from "react-router-dom"
import logo from "../../assets/Logo_ML.png"

const NavLogo = () => {
  const nav = useNavigate()
  const handleClick = () => nav("/")
  return (
    <img
      className="object-contain cursor-pointer"
      src={logo}
      alt="Logo"
      onClick={handleClick}
    />
  )
}
export default NavLogo
