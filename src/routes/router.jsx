import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import AboutPage from "../components/others/AboutPage";
import ContactPage from "../components/others/ContactPage";
import ErrorPage from "../components/others/ErrorPage";
import PolicyPage from "../components/others/PolicyPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/policy",
        element: <PolicyPage />,
      },
    ],
  },
]);

export default router;
