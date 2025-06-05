import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const onResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLinkClick = () => {
    if (!isDesktop) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {!sidebarOpen && (
        <button
          className="btn position-fixed sidebarHamburger"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <i className="bi text-white bi-list"></i>
        </button>
      )}

      {!isDesktop && sidebarOpen && (
        <div
          className="position-fixed w-100 h-100 sidebarOverlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className="position-fixed top-0 vh-100 d-flex flex-column flex-shrink-0 sidebar"
        style={{
          left: sidebarOpen ? "0" : "-280px",
        }}
      >
        <div className="p-3 sidebarBreak">
          <div className="row justify-content-center">
            <button className="btn btn-lg ms-auto">
              <i className="bi bi-watch text-white" onClick={toggleSidebar}></i>
            </button>
          </div>
          <div className="position-relative d-flex align-items-center">
            <Link
              to="/"
              className="position-absolute text-white text-decoration-none"
              onClick={handleLinkClick}
            >
              <span className="fs-4 sidebarText">True Time Repair</span>
            </Link>
            
            <button
              className="btn btn-outline-light btn-sm ms-auto"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>

        <div className="p-3 flex-grow-1">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item mb-1">
              <Link
                to="/"
                className="nav-link text-white d-flex align-items-center py-2 sidebarText"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mb-1">
              <Link
                to="/services"
                className="nav-link text-white d-flex align-items-center py-2 sidebarText"
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item mb-1">
              <Link
                to="/contact"
                className="nav-link text-white d-flex align-items-center py-2 sidebarText"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item mb-1">
              <Link
                to="/watch-care-tips"
                className="nav-link text-white d-flex align-items-center py-2 sidebarText"
                onClick={handleLinkClick}
              >
                Watch Care Tips
              </Link>
            </li>
            <li className="nav-item mb-1">
              <Link
                to="/our-watches"
                className="nav-link text-white d-flex align-items-center py-2 sidebarText" 
                onClick={handleLinkClick}
              >
                Our Watches
              </Link>
            </li>
            <li className="nav-item mb-1">
              <Link
                to="/certifications"
                className="nav-link text-white d-flex align-items-center py-2 sidebarText"
                onClick={handleLinkClick}
              >
                Certifications
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;