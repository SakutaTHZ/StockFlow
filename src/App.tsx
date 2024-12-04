import "./App.css";
import ScrollToTopButton from "./components/ScrollToTop";
import CNetNav from "./components/CNetNav";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/index";
import Details from "./pages/details";
import ErrorBoundary from "./components/ErrorBoundary";
import { useEffect } from "react";
import { generateCardData } from "./data/generateData";
import { useAtom } from "jotai";
import { carAtom } from "./data/atoms";

function App() {
  const [, setCarData] = useAtom(carAtom);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize card data
    const totalCards = Math.floor(Math.random() * 300);
    const cards = Array.from({ length: totalCards }, generateCardData);
    setCarData(cards);
  }, [navigate, setCarData]);

  return (
    <>
      <ScrollToTopButton customClass={""} />
      <CNetNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </>
  );
}

const MainApp: React.FC = () => (
  <ErrorBoundary>
    <Router>
      <App />
    </Router>
  </ErrorBoundary>
);

export default MainApp;
