import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import Dashboard from "./components/Dashboard";
import AppLayout from "./components/AppLayout"; 

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />, 
    },
    {
      path: "/register",
      element: <Register />, 
    },
    {
      path: "/home",
      element: <AppLayout />,
      children: [
        {
          index: true, 
          element: <Home />, 
        },
        {
          path: "create-blog",
          element: <CreateBlog />,
        },
        {
          path: "dashboard",
          element: <Dashboard />, 
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
