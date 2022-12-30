import { Breadcrumb, Spinner } from "@/components"
import { useSearch } from "@/hooks"
import { Item } from "./components"

const ItemList = () => {
  const { loading, items, categories } = useSearch()
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Breadcrumb items={categories} />
          <div className="bg-white rounded">
            {items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </>
  )
}
export default ItemList
