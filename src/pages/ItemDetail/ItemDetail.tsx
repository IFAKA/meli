import { Breadcrumb, Spinner } from "@/components"
import { useItemDetail } from "@/hooks"

const ItemDetail = () => {
  const {
    loading,
    picture,
    condition,
    sold,
    title,
    price,
    description,
    categories,
  } = useItemDetail()
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Breadcrumb items={categories} />
          <div className="bg-white rounded sm:p-8 p-4">
            <div className="sm:flex">
              <div className="w-full max-w-[680px] sm:h-[680px] h-auto shrink-0">
                <img src={picture} className="w-full h-full object-contain" />
              </div>
              <div className="sm:ml-8">
                <div className="flex sm:mb-4 sm:mt-0 mt-4 mb-2">
                  <h4 className="text-sm mr-1.5">{condition}</h4>
                  <h4 className="text-sm">- {sold} vendidos</h4>
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <h1 className="text-[46px] sm:my-8 mb-4">$ {price}</h1>
                <button className="bg-[#3483FA] text-white w-full rounded sm:p-4 p-2 sm:text-2xl">
                  Comprar
                </button>
              </div>
            </div>
            <h2 className="text-[28px] sm:my-8 mt-8 mb-4">
              Descripcion del producto
            </h2>
            <p>{description}</p>
          </div>
        </>
      )}
    </>
  )
}
export default ItemDetail
