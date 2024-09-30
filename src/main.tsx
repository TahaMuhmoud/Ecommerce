import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ColorModeContextProvider from "./context/ColorModeContext.tsx";
import MenuContextProvider from "./context/MenuContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginForm from "./components/LoginForm.tsx";
import SignupForm from "./components/SignupForm.tsx";
import AddAdressProvider from "./context/AddAdressProvider.tsx";
import PaymentProvider from "./context/PaymentProvider.tsx";
import LoadingPage from "./pages/LoadingPage.tsx";
import ProtectedRoot from "./components/ProtectedRoot.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const AppLayout = lazy(() => import("./AppLayout.tsx"));
const HomePage = lazy(() => import("./pages/HomePage.tsx"));
const ProductPage = lazy(() => import("./pages/ProductPage.tsx"));
const AllProducts = lazy(() => import("./pages/AllProducts.tsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.tsx"));
const CartPage = lazy(() => import("./pages/CartPage.tsx"));
const OrdersPage = lazy(() => import("./pages/OrdersPage.tsx"));
const WishlistPage = lazy(() => import("./pages/WishlistPage.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <ProtectedRoot>
          <AppLayout />
        </ProtectedRoot>
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
      {
        path: "/shop",
        element: <AllProducts />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/allorders",
        element: <OrdersPage />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LoginPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <LoginForm />,
      },
      {
        path: "/login/signup",
        element: <SignupForm />,
      },
    ],
  },
]);

const qClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // 5 minutes
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={qClient}>
      <ColorModeContextProvider>
        <MenuContextProvider>
          <PaymentProvider>
            <AddAdressProvider>
              <RouterProvider router={router} />
            </AddAdressProvider>
          </PaymentProvider>
        </MenuContextProvider>
      </ColorModeContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
