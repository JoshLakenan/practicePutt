import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

import Pinniped from "pinniped-sdk";
const pnpd = Pinniped("http://localhost:3000");

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage pnpd={pnpd} />} />
        <Route path="/login" element={<LoginPage pnpd={pnpd} />} />
        <Route path="/register" element={<RegisterPage pnpd={pnpd} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
