import "./styles/App.css";
import "holderjs";
import NavBar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      handleScrollToTop();
    }, [pathname]);

    return null;
  };

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
