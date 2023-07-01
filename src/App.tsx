import { QueryClient, QueryClientProvider } from "react-query";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home } from "./ui/Pages/Home/Home";
import { Cart } from "./ui/Pages/Cart/Cart";
import { Navbar } from "./ui/Components/Navbar/Navbar";
import { Modal } from "./ui/Components/modal/Modal";
import { Loading } from "./ui/Components/Loading/Loading";

const queryClient = new QueryClient();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/cart",
//     element: <Cart />,
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

// WRAPPED NAVBAR WITH OTHER COMPONENTS
function NavbarWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Modal />
      {loading && <Loading />}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
