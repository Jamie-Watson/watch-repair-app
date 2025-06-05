import { Link } from 'react-router-dom';

function HomeJumbotron({service}){
    return (
        <div 
        className="position-relative d-flex align-items-center justify-content-center whiteText homeJumbotron"
       
      >
        <div className="text-center position-relative p-4" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold mb-3">
            Expert Watch Repair & Restoration
          </h1>
          <p className="lead" >
          Bringing your cherished timepieces back to life with unparalleled precision and care
          </p>
          <Link to="/services" className="text-decoration-none"> 
          <h1 className="display-6 mb-3 whiteText" style={{ cursor: 'pointer' }}>           
            Book Your Repair Now           
          </h1>
        </Link>        
        </div>
      </div>
    );
}

export default HomeJumbotron;