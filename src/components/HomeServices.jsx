import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { useNavigate } from "react-router-dom";

function HomeServices() {
  const navigate = useNavigate();

  const handleServiceClick = (servicePage) => {
    navigate(`/services/${servicePage}`);
  };

  return (
    <>
      <div className="container-fluid d-flex py-3 homeServices">
        <div className="container">
          <div className="row g-4 text-center">
            <h1 className="display-4 fw-bold mb-3 whiteText">
              Specialist Services
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            {servicesData.map((service) =>
              service.id < 4 ? (
                <div key={service.id} className="col-lg-4 p-4 d-flex">
                  <div
                    onClick={() => handleServiceClick(service.page)}
                    style={{ cursor: "pointer", width: "100%" }}
                    className="d-flex"
                  >
                    <ServiceCard
                      serviceTitle={service.title}
                      serviceDes={service.shortDescription}
                      serviceImg={service.image}
                    />
                  </div>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
          <div className="row g-4 text-center justify-content-center mt-3">
            <div className="col-lg-4 text-center">
              <Link to="/services" className="text-decoration-none">
                <p className="lead whiteText fw-bold" href="">
                  View All Services
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeServices;
