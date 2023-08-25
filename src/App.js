import "./styles/App.css";
import "holderjs";
import NavBar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import WorkDetail from "./pages/workDetail";
import DummyWorkDetail from "./pages/DummyWorkDetail";
import { useEffect } from "react";

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
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail-work" element={<WorkDetail />} />
        <Route path="/dummy-detail-work" element={<DummyWorkDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
