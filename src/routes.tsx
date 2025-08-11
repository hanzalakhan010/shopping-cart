// import { createBrowserRouter, createRoutesFromElements } from "react-router";
// import Cart from "./pages/Cart"
// import ProductsPage from "./pages/Products"

import Layout from "./components/Layout";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import ProductsPage from "./pages/Products";
import Cart from "./pages/Cart";

// export const routes = [
//     { path: '/', element: <ProductsPage /> },
//     { path: '/cart', element: <Cart /> }
// ]


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<Cart />} />
        </Route>
    )
)