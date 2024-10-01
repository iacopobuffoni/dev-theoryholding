import { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Settings from './components/dashboard-section/settings-section/settings';

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
  const isRegistered = localStorage.getItem("name") && localStorage.getItem("surname") && localStorage.getItem("email") && localStorage.getItem("password");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isRegistered) {
      navigate("/");
    }
  }, [isRegistered, navigate]);

  return (
    <Routes>
      <Route path="/" element={isRegistered ? <Login /> : <Registration />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
