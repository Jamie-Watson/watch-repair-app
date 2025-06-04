function Contact() {
  const handleSocialClick = (platform) => {
    const urls = {
      instagram: "https://instagram.com/truetimerepair",
      youtube: "https://youtube.com/@truetimerepair",
      linkedin: "https://linkedin.com/company/truetimerepair",
    };

    if (urls[platform]) {
      window.open(urls[platform], "_blank");
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:trueTimeRepair@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+16137777777";
  };

  return (
    <section className="container-fluid contact d-flex align-items-center">
      <div className="container">
        <div className="row g-4 justify-content-center text-center my-3">
          <div className="col-lg-12">
            <h1 className="display-4 fw-bold whiteText">Contact Us</h1>
          </div>
        </div>

        <div className="row g-4 align-items-stretch mb-5 justify-content-center">
          <div className="col-12 col-lg-4">
            <div className="h-100 d-flex flex-column justify-content-center text-center">
              <div className="mb-3">
                <i className="bi bi-geo-alt-fill accentText fs-2 mb-2"></i>
              </div>
              <h5 className="h4 mb-3">Visit Our Store</h5>
              <address className="mb-0">
                <strong>True Time Repair</strong>
                <br />
                111 Sample Street
                <br />
                Ottawa, ON K1A 1A1
              </address>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="h-100 d-flex flex-column justify-content-center text-center">
              <div className="mb-3">
                <i className="bi bi-telephone-fill accentText fs-2 mb-2"></i>
              </div>
              <h5 className="h4 mb-3">Get In Touch</h5>
              <div className="contact-links">
                <p className="mb-2">
                  <button
                    className="btn btn-link p-0 accentText"
                    onClick={handlePhoneClick}
                  >
                    (613) 777-7777
                  </button>
                </p>
                <p className="mb-0">
                  <button
                    className="btn btn-link p-0 accentText"
                    onClick={handleEmailClick}
                  >
                    trueTimeRepair@gmail.com
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="h-100 d-flex flex-column justify-content-center text-center">
              <div className="mb-3">
                <i className="bi bi-share-fill accentText fs-2 mb-2"></i>
              </div>
              <h5 className="h4 mb-3">Follow Us</h5>
              <div className="socialButton d-flex gap-3 justify-content-center">
                <button
                  className="btn btn-outline-primary socialButton btn-lg"
                  onClick={() => handleSocialClick("instagram")}
                  style={{ width: "50px", height: "50px" }}
                >
                  <i className="bi bi-instagram"></i>
                </button>
                <button
                  className="btn btn-outline-primary socialButton btn-lg"
                  onClick={() => handleSocialClick("youtube")}
                  style={{ width: "50px", height: "50px" }}
                >
                  <i className="bi bi-youtube"></i>
                </button>
                <button
                  className="btn btn-outline-primary socialButton btn-lg"
                  onClick={() => handleSocialClick("linkedin")}
                  style={{ width: "50px", height: "50px" }}
                >
                  <i className="bi bi-linkedin"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;