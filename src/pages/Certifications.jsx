import watchCertifications from "../data/watchCertifications";
import CertificationCard from "../components/CertificationCard";
import Contact from "../components/Contact";

function Certifications() {
  return (
    <>
      <div className="container-fluid py-3 homeServices largeContainer">
        <div className="row g-4 text-center">
          <h1 className="display-4 fw-bold mb-3 whiteText">Certifications</h1>
        </div>
        <div className="row g-4 justify-content-center my-5 align-items center">
          {watchCertifications.map((cert, index) =>
            index < 6 ? (
              <div className="col-sm-4">
                <CertificationCard
                  certificationDes={cert.provider}
                  certificationImg={cert.image}
                  certificationTitle={cert.title}
                />
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Certifications;
