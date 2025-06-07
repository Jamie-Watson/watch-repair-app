import watchCertifications from "../data/watchCertifications";

function HomeCertifications() {
  return (
    <>
      <div
        className="container-fluid homeCertifications d-flex align-items-center"
        style={{ minHeight: "300px" }}
      >
        <div className="container">
          <div className="row g-4">
            {watchCertifications.map((cert) => (
              <div className="col-12 col-lg-4">
                <div
                  className="certification-item text-center h-100 d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100px" }}
                >
                  <span className="display-6 fs-2">
                    {cert.title.slice(0, -13).concat(" ", "Certified")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCertifications;
