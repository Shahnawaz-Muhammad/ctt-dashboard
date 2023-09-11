import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/shared/layout";
import Dashboard from "./pages/dashboard";
import Customers from "./pages/customers";
import "./App.css";
import ThemeContextProvider from "./context/themeContext";
import Practice from "./components/practice";

function App() {
 
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Dashboard />
          ),
        },
        {
          path: "customers",
          element: <Customers />,
        },
        {
          path: "practice",
          element: <Practice />,
        },
        {
          path: "/",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return (
      <ThemeContextProvider>
    <>
        <RouterProvider router={router} />
    </>
      </ThemeContextProvider>
  );
}

export default App;
