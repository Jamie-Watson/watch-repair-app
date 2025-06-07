import { useNavigate } from "react-router-dom";
import watchCertifications from "../data/watchCertifications";
import CertificationCard from "../components/CertificationCard";
import Contact from "../components/Contact";

function Certifications() {
  const navigate = useNavigate();

  const handleCertificationClick = (certificationPage) => {
    navigate(`/certifications/${certificationPage}`);
  };

  return (
    <>
      <div className="container-fluid py-3 homeServices largeContainer">
        <div className="row g-4 text-center">
          <h1 className="display-4 fw-bold mb-3 whiteText">Certifications</h1>
        </div>
        <div className="row g-4 justify-content-center my-5 align-items-center">
          {watchCertifications.map((cert, index) =>
            index < 6 ? (
              <div key={cert.page} className="col-sm-4">
                <CertificationCard
                  certification={cert}
                  onViewDetails={() => handleCertificationClick(cert.page)}
                />
              </div>
            ) : null
          )}
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Certifications;
