import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { ContactPage } from "./pages/ContactPage";
import { NewContactPage } from "./pages/NewContact";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/contact/:id",
    element: <ContactPage />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/newContact",
    element: <NewContactPage/>,
    errorElement: <h1>404 Not Found</h1>,
  }
])