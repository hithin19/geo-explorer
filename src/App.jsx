import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Applayout from "./components/layout/Applayout";

import { Home } from "./pages/Home";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Errorpage } from "./pages/Errorpage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
    errorElement:<Errorpage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
