import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Sidebar from "./components/Sidebar";
import HomeJumbotron from "./components/HomeJumbotron";
import HomeCertifications from "./components/HomeCertifications";
import HomeServices from "./components/HomeServices";
import HomeWatches from "./components/HomeWatches";
import Contact from "./components/Contact";
import "./App.css";

import { useState, useEffect } from "react";

function MainContent({ sidebarOpen, setSidebarOpen }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const onResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);

      if (desktop && !sidebarOpen) {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <div
      className="main-content"
      style={{
        marginLeft: isDesktop && sidebarOpen ? "280px" : "0",
        minHeight: "100vh",
        transition: "margin-left 0.3s ease-in-out",
      }}
    >
      <div className="container-fluid p-0">
        <div className="row g-0 justify-content-center">
          <div className="col-12">
            <HomeJumbotron />
            <HomeCertifications />
            <HomeServices />
            <HomeWatches />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MainContent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
}

export default App;
