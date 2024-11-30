import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import Dashboard from "./components/Dashboard";
import AppLayout from "./components/AppLayout"; // Layout with navigation bar

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />, // Login page as the default route
    },
    {
      path: "/register",
      element: <Register />, // Registration page
    },
    {
      path: "/home",
      element: <AppLayout />, // Layout with navigation bar
      children: [
        {
          index: true, // Default child route
          element: <Home />, // Home page
        },
        {
          path: "create-blog",
          element: <CreateBlog />, // Create Blog page
        },
        {
          path: "dashboard",
          element: <Dashboard />, // Dashboard page
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
