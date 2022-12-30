import { IChild } from "@/models"
import { HashRouter } from "react-router-dom"

export const Wrapper = ({ children }: IChild) => (
  <HashRouter>{children}</HashRouter>
)
