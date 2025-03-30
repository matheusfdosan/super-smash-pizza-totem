import React, { Suspense } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./index.css"

const InitialTemplate = React.lazy(() => import("./template/Initial"))
const CatalogTemplate = React.lazy(() => import("./template/Catalog"))
const OrderTemplate = React.lazy(() => import("./template/Order"))
const PaymentTemplate = React.lazy(() => import("./template/Payment"))
const PaidTemplate = React.lazy(() => import("./template/Paid"))

import Loading from "./components/Loading"
import { SelectedItemProvider } from "./utils/SelectedItemContext"

createRoot(document.getElementById("root")).render(
  <SelectedItemProvider>
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<InitialTemplate />} />
          <Route path="/catalog" element={<CatalogTemplate />} />
          <Route path="/order" element={<OrderTemplate />} />
          <Route path="/payment" element={<PaymentTemplate />} />
          <Route path="/paid" element={<PaidTemplate />} />
        </Routes>
      </Suspense>
    </Router>
  </SelectedItemProvider>
)
