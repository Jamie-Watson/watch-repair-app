import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import watchCertifications from "../data/watchCertifications";

function CertificationDetails() {
  const params = useParams();
  const { page } = params;
  const [certification, setCertification] = useState(null);

  useEffect(() => {
    if (page) {
      const foundCert = watchCertifications.find((cert) => cert.page === page);
      setCertification(foundCert);
    }
  }, [page, params]);

  if (!certification) {
    return <></>;
  }

  return (
    <>
      <div className="container-fluid py-3 homeServices ">
        <div className="row g-4 text-center">
          <h1 className="display-4 fw-bold mb-3 whiteText">Certifications</h1>
        </div>
      </div>
      <div className="serviceBooking p-2 p-md-5">
        <div className="container">
          <div className="card shadow-lg border-0 certCard">
            <div className="row d-flex align-items-center justify-content-center pt-3 px-2 px-md-3">
              <div className="d-flex align-items-center position-relative">
                <Link
                  className="backButton rounded-circle"
                  to="/certifications"
                >
                  <button className="btn btn-outline-primary backButton rounded-circle btn-md">
                    <i className="bi bi-caret-left"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="card-body p-2 p-md-5">
              <div className="text-center mb-4 mb-md-5">
                <div className="mx-auto mb-4 bg-light d-flex align-items-center justify-content-center certImage">
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="img-fluid"
                  />
                </div>

                <h2 className="fw-bold mb-2 fs-2">{certification.title}</h2>
                <p className="text-muted mb-0 fs-6">
                  Awarded by {certification.provider}
                </p>
              </div>
              <div className="row g-2 g-md-4">
                <div className="col-lg-6">
                  <div className="card h-100 border">
                    <div className="card-body p-2 p-md-4">
                      <h5 className="card-title fw-bold mb-3 fs-4">
                        About the Certification
                      </h5>
                      <p className="card-text fs-6">
                        {certification.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card h-100 border">
                    <div className="card-body p-2 p-md-4">
                      <h5 className="card-title fw-bold mb-3 fs-4">
                        Skills & Competencies
                      </h5>
                      <ul className="list-unstyled mb-0">
                        {certification.competencies.map((competency, index) => (
                          <li
                            key={index}
                            className="mb-2 d-flex align-items-start"
                          >
                            ●<span className="me-2"></span>
                            <span className="fs-6">{competency}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2 mt-md-4">
                <div className="col-lg-12">
                  <div className="card border">
                    <div className="card-body p-2 p-md-4">
                      <h5 className="card-title fw-bold mb-3 fs-4">
                        Issuing Body
                      </h5>
                      <p className="card-text mb-3 fs-6">
                        {certification.issuingBody}
                      </p>

                      <a
                        href={certification.website}
                        className="accentText fs-6"
                      >
                        Visit AWCI Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2 mt-md-4">
                <div className="col-12">
                  <div className="card ">
                    <div className="card-body p-2 p-md-4">
                      <h5 className="card-title fw-bold mb-3 fs-4">
                        Verify This Certification
                      </h5>
                      <p className="card-text mb-3 ">
                        To ensure transparency and trust, you can verify the
                        validity of our watchmakers' CW21 certifications
                        directly through the AWCI's official verification
                        portal.
                      </p>
                      <a href="#" className="accentText fs-6">
                        Verify Certification Online
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificationDetails;
