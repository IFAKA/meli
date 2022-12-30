import { ItemProps } from "@/models"
import { useNavigate } from "react-router-dom"
import logo from "../../../../assets/ic_shipping.png"

const Item = ({ item }: ItemProps) => {
  const { free_shipping: freeShipping, id, picture, title, address } = item
  const price = new Intl.NumberFormat("de-DE").format(item.price.decimals)
  const nav = useNavigate()

  const handleClick = () => nav(`/items/${id}`)

  return (
    <button
      key={id}
      className="flex sm:flex-row flex-col sm:items-start items-center w-full p-4"
      onClick={handleClick}
    >
      <img
        src={picture}
        className="object-contain rounded border h-[180px]"
        alt={title}
      />
      <div className="text-left p-4 w-full">
        <div className="w-full sm:flex sm:justify-between">
          <div className="flex">
            <h2 className="text-2xl">$ {price}</h2>
            {freeShipping && (
              <img
                className="object-contain ml-2.5"
                src={logo}
                alt="Free shipping"
              />
            )}
          </div>
          <h5 className="text-xs sm:mt-0 mt-1">{address}</h5>
        </div>
        <h3 className="text-lg sm:mt-8 mt-2">{title}</h3>
      </div>
    </button>
  )
}
export default Item
