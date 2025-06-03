import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from './components/Sidebar';
import HomeJumbotron from './components/HomeJumbotron';
import './App.css';

import { useState, useEffect } from 'react';

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
    
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <div
      className="main-content"
      style={{
        marginLeft: isDesktop && sidebarOpen ? '280px' : '0',
        minHeight: '100vh',
        transition: 'margin-left 0.3s ease-in-out',
      }}
    >
      <div className="container-fluid p-0">
        <div className="row g-0 justify-content-center">
          <div className="col-12">
            <HomeJumbotron />
            <div className="p-3 p-md-4">
              <h1>Sample</h1>
              
              <div className="mt-4">
                <h2>Sample Content</h2>
                {Array.from({ length: 20 }, (_, i) => (
                  <p key={i} className="mb-3">
                    This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                ))}
              </div>
            </div>
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
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
      <MainContent 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
    </>
  );
}

export default App;