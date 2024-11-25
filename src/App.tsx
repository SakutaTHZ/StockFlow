import "./App.css";
import ScrollToTopButton from "./components/ScrollToTop";
import CNetNav from "./components/CNetNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <ScrollToTopButton customClass={''} />
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
