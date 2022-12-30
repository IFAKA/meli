import { Suspense, lazy } from "react"
import { HashRouter, Route } from "react-router-dom"
import { SWRConfig } from "swr"
import { Layout, Spinner } from "./components"
import { ServiceWorkerModal } from "./config"
import { fetcher } from "./services"
import { RoutesWithNotFound } from "./utils"

const Home = lazy(() => import("./pages/Home/Home"))
const ItemList = lazy(() => import("./pages/ItemList/ItemList"))
const ItemDetail = lazy(() => import("./pages/ItemDetail/ItemDetail"))

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <ServiceWorkerModal />
      <SWRConfig value={{ fetcher }}>
        <HashRouter>
          <Layout>
            <RoutesWithNotFound>
              <Route path="/" element={<Home />} />
              <Route path="/items" element={<ItemList />} />
              <Route path="/items/:id" element={<ItemDetail />} />
            </RoutesWithNotFound>
          </Layout>
        </HashRouter>
      </SWRConfig>
    </Suspense>
  )
}

export default App
