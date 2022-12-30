import { Result } from "@/models"
import { getAddressUrl, getItemsUrl } from "@/services"
import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import useSWR from "swr"

const useSearch = () => {
  const searchParams = useSearchParams()[0]
  const query = searchParams.get("search") || ""

  const url = query && getItemsUrl(query)
  const addressUrl = query && getAddressUrl(query)

  const { data } = useSWR<Result>(url)
  const { data: address } = useSWR<string[]>(addressUrl)

  const items = useMemo(
    () =>
      data?.items &&
      address &&
      data?.items.map((item, i) => ({ ...item, address: address[i] })),
    [data?.items, address],
  )

  return {
    loading: !data,
    items: items || [],
    categories: data?.categories || [],
  }
}
export default useSearch
