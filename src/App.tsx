import "./App.css";
import ScrollToTopButton from "./components/ScrollToTop";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/index";
import Details from "./pages/details";
import StockDetails from "./pages/adminCarStockDetails";
import Login from "./pages/login";
import Admin from "./pages/admin"
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <ScrollToTopButton customClass={""} />

      <Routes>
        {/* Default route redirecting to /StockFlow/login */}
        <Route path="/" element={<Navigate to="/StockFlow/login" replace />} />
        <Route path="/StockFlow/login" element={<Login />} />
        <Route path="/StockFlow" element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/StockDetail/:id" element={<StockDetails />} />
        <Route path="/StockFlowAdmin" element={<Admin />} />

        <Route path="/login" element={<Login />} />
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