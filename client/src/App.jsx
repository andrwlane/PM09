import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { Contacts } from "./pages/contacts.jsx";
import { About } from "./pages/about.jsx";
import { Services } from "./pages/services.jsx";
import { CostCalculator } from "./pages/cost-calculator.jsx";
import { Navbar } from "./components/navbar.jsx";

export const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cost-calculator" element={<CostCalculator />} />
        </Routes>
      </Router>
    </div>
  );
};
