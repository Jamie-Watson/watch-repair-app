function HomeCertifications() {
  return (
    <>
      <div
        className="container-fluid homeCertifications d-flex align-items-center"
        style={{ minHeight: "300px" }}
      >
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-4">
              <div
                className="certification-item text-center h-100 d-flex align-items-center justify-content-center"
                style={{ minHeight: "100px" }}
              >
                <span className="display-4">Certification 1</span>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div
                className="certification-item text-center h-100 d-flex align-items-center justify-content-center"
                style={{ minHeight: "100px" }}
              >
                <span className="display-4">Certification 2</span>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div
                className="certification-item text-center h-100 d-flex align-items-center justify-content-center"
                style={{ minHeight: "100px" }}
              >
                <span className="display-4">Certification 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCertifications;
