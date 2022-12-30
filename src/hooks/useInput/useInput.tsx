import { useEffect, useState } from "react"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

const useInput = () => {
  const searchParams = useSearchParams()[0]
  const search = searchParams.get("search") || ""

  const [value, setValue] = useState(search)
  const { pathname } = useLocation()
  const nav = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    value !== "" && nav(`items?search=${value}`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  useEffect(() => {
    pathname.includes("/items/") || pathname === "/"
      ? setValue("")
      : setValue(search)
  }, [pathname, search])

  return { handleSubmit, value, handleChange }
}
export default useInput
