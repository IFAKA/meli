import { IChild } from "@/models"
import { Navbar } from "../Navbar"

const Layout = ({ children }: IChild) => {
  return (
    <>
      <Navbar />
      <div className="w-full pt-[59px] grid place-items-center h-full px-4">
        <div className="w-full max-w-6xl">{children}</div>
      </div>
    </>
  )
}
export default Layout
