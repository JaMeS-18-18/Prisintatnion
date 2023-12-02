// Filename - App.js

import "./App.css";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  AboutUs,
  OurAim,
  OurVision,
} from "./pages/AboutUs";


import Contact from "./pages/ContactUs";
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route
          path="/about-us"
          element={<AboutUs />}
        />
        <Route
          path="/about-us/aim"
          element={<OurAim />}
        />
        <Route
          path="/about-us/vision"
          element={<OurVision />}
        />
       
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </Router>
  );
}

export default App;
