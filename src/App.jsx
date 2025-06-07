import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./components/Main";
import Home from "./pages/Home";
import Services from "./pages/Services";
import WatchCareTips from "./pages/WatchCareTips";
import OurWatches from "./pages/OurWatches";
import Certifications from "./pages/Certifications";
import ServiceDetail from "./pages/ServiceDetail";
import CertificationDetails from "./pages/CertificationDetails";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  return (
    <Main sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:servicePage" element={<ServiceDetail />} />
        <Route path="/watch-care-tips" element={<WatchCareTips />} />
        <Route path="/our-watches" element={<OurWatches />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route
          path="/certifications/:page"
          element={<CertificationDetails />}
        />
      </Routes>
    </Main>
  );
}

export default App;
