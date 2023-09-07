import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/shared/layout";
import Dashboard from "./pages/dashboard";
import Customers from "./pages/customers";
import "./App.css";
import ThemeContextProvider from "./context/themeContext";

function App() {
  // const chartData = {
  //   labels: ["Label 1", "Label 2", "Label 3"],
  //   datasets: [
  //     {
  //       label: "Sample Data",
  //       data: [12, 19, 3],
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.2)",
  //         "rgba(54, 162, 235, 0.2)",
  //         "rgba(255, 206, 86, 0.2)",
  //       ],
  //       borderColor: [
  //         "rgba(255, 99, 132, 1)",
  //         "rgba(54, 162, 235, 1)",
  //         "rgba(255, 206, 86, 1)",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // const pieChartData = {
  //   labels: ["Green", "Blue", "Yellow"],
  //   datasets: [
  //     {
  //       data: [25, 35, 40],
  //       backgroundColor: ["green", "blue", "yellow"],
  //     },
  //   ],
  // };

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
          path: "/",
          element: <Dashboard />,
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
