import { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

const Registration = lazy(() => import("./components/registration-section/registration"));
const Login = lazy(() => import("./components/login-section/login"));

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
    </Routes>
  );
}

export default App;
