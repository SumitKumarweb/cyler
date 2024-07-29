import React, { useState, useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import ResponsiveAppBar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/FooterTheme";
import Home from "./Components/Home/Home";
import ProductPage from "./Components/ProductPage/ProductPage";
import ProductCardList from "./Components/ProductCardList/ProductCardList";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import Maintenance from "./Components/Maintenance/Maintenance";
import Terms from "./Components/TermsAndConditions/Terms";
import FAQ from "./Components/FAQ/FAQ";
import AuthenticationPage from "./Components/AuthenticationPage/AuthenticationPage";
function App() {
  const [loading, setLoading] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ResponsiveAppBar />
          <Home />,
          <Footer />
        </>
      ),
    },
    {
      path: "/Products",
      element: (
        <>
          <ResponsiveAppBar />
          <ProductCardList />
          <Footer />
        </>
      ),
    },
    {
      path: "/Course",
      element: <></>,
    },
    {
      path: "/Software",
      element: <></>,
    },
    {
      path: "/productDetails",
      element: (
        <>
          <ResponsiveAppBar />
          <ProductPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/PrivacyPolicy",
      element: (
        <>
          <ResponsiveAppBar />
          <PrivacyPolicy />
          <Footer />
        </>
      ),
    },
    {
      path: "/Terms",
      element: (
        <>
          <ResponsiveAppBar />
          <Terms />
          <Footer />
        </>
      ),
    },
    {
      path: "/FAQ",
      element: (
        <>
          <ResponsiveAppBar />
          <FAQ />
          <Footer />
        </>
      ),
    },
    {
      path: "/AuthenticationPage",
      element: (
        <>
          <ResponsiveAppBar />
          <AuthenticationPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/Maintenance",
      element: (
        <>
          <ResponsiveAppBar />
          <Maintenance />
          <Footer />
        </>
      ),
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

 
  return <>{loading ? <Loader /> : <RouterProvider router={router} />}</>;
}

export default App;
