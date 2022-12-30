import { Breadcrumb, ErrorFallback, Spinner } from "@/components"
import { useSearch } from "@/hooks"
import { Item } from "./components"
import { ErrorBoundary } from "react-error-boundary"

const ItemList = () => {
  const { loading, items, categories } = useSearch()
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {loading ? (
        <Spinner />
      ) : items.length ? (
        <>
          <Breadcrumb items={categories} />
          <div className="bg-white rounded">
            {items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </>
      ) : (
        <div className="w-full text-center font-bold">Item not found</div>
      )}
    </ErrorBoundary>
  )
}
export default ItemList
