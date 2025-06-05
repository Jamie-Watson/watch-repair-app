import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { servicesData } from "../data/servicesData";
import Contact from "../components/Contact";

function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (servicePage) => {
    navigate(`/services/${servicePage}`);
  };

  return (
    <>
      <div className="container-fluid py-3 homeServices">
        <div className="row g-4 text-center">
          <h1 className="display-4 fw-bold mb-3 whiteText">
            Specialist Services
          </h1>
        </div>
        <div className="row g-4 justify-content-center">
          {servicesData.map((service) => (
            <div key={service.id} className="col-lg-4 p-4">
              <div 
                onClick={() => handleServiceClick(service.page)}
                style={{ cursor: 'pointer' }}
              >
                <ServiceCard
                  serviceTitle={service.title}
                  serviceDes={service.shortDescription}
                  serviceImg={service.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Services;