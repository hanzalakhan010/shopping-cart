// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes'
import CartContextComponent from './contexts/CartContext'

// const router = createBrowserRouter(routes)
createRoot(document.getElementById('root')!).render(
  <CartContextComponent>
    <RouterProvider router={router} />
  </CartContextComponent>,
)
