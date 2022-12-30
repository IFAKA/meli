import { ItemDetail } from "@/models"
import { getItemCategoryUrl, getItemUrl } from "@/services"
import { useParams } from "react-router-dom"
import useSWR from "swr"

const useItemDetail = () => {
  const { id } = useParams()

  const itemUrl = id && getItemUrl(id)
  const categoryUrl = id && getItemCategoryUrl(id)

  const { data } = useSWR<ItemDetail>(itemUrl)
  const { data: categories } = useSWR<string[]>(categoryUrl)

  return {
    loading: !data,
    picture: data?.item.picture,
    condition: data?.item.condition,
    sold: data?.item.sold_quantity,
    title: data?.item.title,
    price: new Intl.NumberFormat("de-DE").format(
      data?.item.price.decimals || 0,
    ),
    description: data?.item.description,
    categories: categories || [],
  }
}
export default useItemDetail
