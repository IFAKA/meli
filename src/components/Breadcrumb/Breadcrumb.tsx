import { BreadcrumbProps } from "@/models"
import CaretRight from "phosphor-react/src/icons/CaretRight"

const Breadcrumb = ({ items }: BreadcrumbProps) => (
  <>
    {!!items.length && (
      <div className="my-4 flex w-full max-w-6xl flex-wrap">
        {items.map((path, i) => (
          <div key={path} className="flex items-center">
            <h3
              className={`text-sm text-[#999999] ${
                items.length - 1 === i && "font-semibold"
              }`}
            >
              {path}
            </h3>
            {items.length - 1 !== i && (
              <CaretRight className="mt-0.5 mx-1" color="#999999" />
            )}
          </div>
        ))}
      </div>
    )}
  </>
)
export default Breadcrumb
