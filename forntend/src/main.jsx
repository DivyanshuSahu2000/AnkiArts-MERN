import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Signup from "./components/pages/Signup.jsx";
import Login from "./components/pages/Login.jsx";
import Home from "./components/Home.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import PaintingDetails from "./components/pages/PaintingDetails.jsx";
import { ItemProvider } from "./context/ItemContext.jsx";
import PaintingType from "./components/pages/PaintingType.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./components/pages/Cart.jsx";
import Admin from "./components/pages/admin/Admin.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/admin", element: <Admin /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/cart", element: <Cart /> },
      { path: "/paintings/:id", element: <PaintingDetails /> },
      { path: "/paintingtype/:category", element: <PaintingType /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ItemProvider>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </ItemProvider>
  </StrictMode>
);
