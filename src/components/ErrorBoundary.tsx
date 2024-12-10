import React, { ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorBoundary: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasError) {
      navigate("/StockFlow/login"); // Redirect to login page when error is detected
    }
  }, [hasError, navigate]);

  const handleError = () => {
    setHasError(true);
  };

  try {
    return (
      <div>
        {children}
        <button onClick={handleError}>Simulate Error</button> {/* For testing */}
      </div>
    );
  } catch (error) {
    setHasError(true);
    console.error("Error caught in ErrorBoundary:", error);
    return <div>Something went wrong. Redirecting...</div>;
  }
};

export default ErrorBoundary;
