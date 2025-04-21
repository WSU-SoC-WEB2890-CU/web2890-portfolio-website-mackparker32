import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/pages/Root";
import HomePage from "./components/pages/Home";
import AboutPage from "./components/pages/About";
import PortfolioPage, { portfolioLoader } from "./components/pages/Portfolio";
import ContactPage, { formSubmission } from "./components/pages/Contact";
import CaseStudyPage from "./components/pages/CaseStudy";
import PortfolioDetailPage, {
  portfolioIdLoader,
} from "./components/pages/PortfolioDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "portfolio",
          element: <PortfolioPage />,
          loader: portfolioLoader,
          id: "portfolio-detail",
        },
        {
          path: "portfolio/:portfolioId",
          element: <PortfolioDetailPage />,
          loader: portfolioIdLoader,
          id: "individual-project",
        },
        {
          path: "contact",
          element: <ContactPage />,
          action: formSubmission,
        },
        {
          path: "case-study",
          element: <CaseStudyPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
