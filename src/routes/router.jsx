import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../components/auth/Register";
import ArticalDetails from "../components/home/ArticalDetails";
import ArticalSide from "../components/home/ArticalSide";
import CtgArticals from "../components/home/CtgArticals";
import Home from "../components/home/Home";
import TagArticals from "../components/home/TagArticals";
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
        children: [
          {
            path: "/",
            element: <ArticalSide />,
          },
          {
            path: "/articalDetails/:id",
            element: <ArticalDetails />,
          },
          {
            path: "/tagArticals/:tag",
            element: <TagArticals />,
          },
          {
            path: "/ctgArticals/:ctg",
            element: <CtgArticals />,
          },
        ],
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
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
