import { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

const Dashboard = lazy(() => import("./components/dashboard-section/dashboard")); 
const Login = lazy(() => import("./components/login-section/login"));
const Registration = lazy(() => import("./components/registration-section/registration"));

function App() {
  return (
    <Router>
      <div className="h-screen w-screen">
        <Suspense fallback={<div>Caricamento in corso...</div>} >
          <AppRoutes />
        </Suspense>
      </div>
    </Router>
  );
}

function AppRoutes() {
  const isRegistered = localStorage.getItem("name");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isRegistered) {
      navigate("/");
    }
  }, [isRegistered, navigate]);

  return (
    <Routes>
      <Route path="/" element={isRegistered ? <Login /> : <Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
