import "./App.css";
import ScrollToTopButton from "./components/ScrollToTop";
import CNetNav from "./components/CNetNav";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/index";
import ErrorBoundary from "./components/ErrorBoundary";
import { useEffect } from "react";
import { generateCardData } from "./data/generateData";
import { useAtom } from "jotai";
import { carAtom } from "./data/atoms";

function App() {
  const [cars, setCarData] = useAtom(carAtom);
  const navigate = useNavigate();
  navigate("/", { state: { cards: cars, page: 1 } });

  useEffect(() => {
    const totalCards = Math.floor(Math.random() * 300);
    const cards = Array.from({ length: totalCards }, generateCardData);
    setCarData(cards);
  }, [setCarData]);

  return (
    <>
      <ScrollToTopButton customClass={""} />
      <CNetNav customClass="my-custom-class" navClass="my-nav-class" />

      <Routes>
        <Route path="/" element={<Home />} />
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
