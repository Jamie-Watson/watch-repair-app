import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Contact from "../components/Contact";

function ServiceDetail() {
  const { servicePage } = useParams();
  const service = servicesData.find((s) => s.page === servicePage);

  const [activeTab, setActiveTab] = useState("dropoff");
  const [dropoffDate, setDropoffDate] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const turnaroundDays = service?.turnaroundDays || 28;

  useEffect(() => {
    if (dropoffDate) {
      const dropoff = new Date(dropoffDate);
      const minPickup = new Date(dropoff);
      minPickup.setDate(dropoff.getDate() + turnaroundDays);

      const minPickupString = minPickup.toISOString().split("T")[0];

      if (!pickupDate || new Date(pickupDate) < minPickup) {
        setPickupDate(minPickupString);
      }
    }
  }, [dropoffDate, pickupDate, turnaroundDays]);

  const today = new Date().toISOString().split("T")[0];

  const getMinPickupDate = () => {
    if (dropoffDate) {
      const dropoff = new Date(dropoffDate);
      const minPickup = new Date(dropoff);
      minPickup.setDate(dropoff.getDate() + turnaroundDays);
      return minPickup.toISOString().split("T")[0];
    }
    return today;
  };

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  if (!service) {
    return <div>Service not found</div>;
  }

  const buttonClick = () => {
    if (isSubmitted) return;

    if (
      !fullName ||
      !email ||
      !phone ||
      !dropoffDate ||
      !dropoffTime ||
      !pickupDate ||
      !pickupTime
    ) {
      setSubmitSuccess(false);
      setShowPopup(true);
      return;
    }

    setSubmitSuccess(true);
    setShowPopup(true);

    setFullName("");
    setEmail("");
    setPhone("");
    setDropoffDate("");
    setPickupDate("");
    setDropoffTime("");
    setPickupTime("");
    setNotes("");
  };

  const closePopup = () => {
    setShowPopup(false);
    setIsSubmitted(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              {submitSuccess ? (
                <h4>Order Submitted Successfully!</h4>
              ) : (
                <h4>Order Failed!</h4>
              )}
            </div>
            <div className="popup-body">
              {submitSuccess ? (
                <p>
                  Your booking has been submitted. You will receive a
                  confirmation email shortly.
                </p>
              ) : (
                <p>Please fill in all required fields.</p>
              )}
            </div>
            <div className="popup-footer">
              <button className="btn backButton" onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid homeServices whiteText">
        <div className="row text-center py-2">
          <h1 className="display-4 fw-bold mb-3 whiteText">
            Specialist Services
          </h1>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row g-0 p-0 align">
          <div className="col-lg-6 homeServices d-flex">
            <div className="container-fluid w-100 p-0 serviceDescription px-2">
              <div className="row d-flex align-items-center justify-content-center pt-3">
                <div className="d-flex align-items-center position-relative">
                  <Link className="backButton rounded-circle" to="/services">
                    <button className="btn btn-outline-primary backButton rounded-circle btn-md">
                      <i className="bi bi-caret-left"></i>
                    </button>
                  </Link>
                  <span className="fs-2 flex-grow-1 text-center">
                    {service.title}
                  </span>
                </div>
              </div>
              <div className="row mt-5 px-4">
                <h4 className="fs-4">Service description:</h4>
              </div>
              <div className="row mt-3 px-4">
                <p className="fs-6">{service.description}</p>
              </div>
              <div className="row mt-3 px-4">
                <h4 className="fs-4">What's Included:</h4>
              </div>
              <div className="row mt-3 px-4">
                {service.details.whatsIncluded.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </div>
              <div className="row mt-3 px-4">
                <h4 className="fs-4">Estimated Cost:</h4>
              </div>
              <div className="row mt-3 px-4">
                <p className="fs-6">{service.details.estimatedCost}</p>
              </div>
              <div className="row mt-3 px-4">
                <h4 className="fs-4">Turnaround:</h4>
              </div>
              <div className="row mt-3 px-4">
                <p className="fs-6">{service.details.turnaround}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-4 serviceBooking">
            <h2 className="text-white text-center mb-4">
              Book {service.title}
            </h2>

            <div className="serviceDescription rounded p-4 serviceDetails">
              <h5 className="mb-3">Your Contact Information</h5>

              <div className="mb-3">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="john.doe@sample.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="(123) 456-7890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <h5 className="mb-3">Preferred Schedule Details</h5>

                <div className="card">
                  <div className="card-body p-4">
                    <div
                      className="btn-group tabButton w-100 mb-4"
                      role="group"
                    >
                      <button
                        type="button"
                        className={`btn ${
                          activeTab === "dropoff"
                            ? "backButton"
                            : "btn-outline-secondary"
                        }`}
                        onClick={() => setActiveTab("dropoff")}
                      >
                        Drop-off
                      </button>
                      <button
                        type="button"
                        className={`btn ${
                          activeTab === "pickup"
                            ? "backButton"
                            : "btn-outline-secondary"
                        }`}
                        onClick={() => setActiveTab("pickup")}
                      >
                        Pick-up
                      </button>
                    </div>

                    {activeTab === "dropoff" && (
                      <div>
                        <div className="mb-3">
                          <label className="form-label">
                            Preferred Drop-off Date *
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            value={dropoffDate}
                            onChange={(e) => setDropoffDate(e.target.value)}
                            min={today}
                            placeholder="mm/dd/yyyy"
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            Preferred Drop-off Time Slot *
                          </label>
                          <select
                            className="form-select"
                            value={dropoffTime}
                            onChange={(e) => setDropoffTime(e.target.value)}
                          >
                            <option value="">------</option>
                            {timeSlots.map((time, index) => (
                              <option key={index} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {activeTab === "pickup" && (
                      <div>
                        <div className="mb-3">
                          <label className="form-label">
                            Preferred Pick-up Date *
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            min={getMinPickupDate()}
                            placeholder="mm/dd/yyyy"
                          />
                          {dropoffDate && (
                            <div className="form-text">
                              Minimum pick-up date is {turnaroundDays} days
                              after drop-off
                            </div>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            Preferred Pick-up Time Slot *
                          </label>
                          <select
                            className="form-select"
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                          >
                            <option value="">------</option>
                            {timeSlots.map((time, index) => (
                              <option key={index} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-3 p-3 bg-white rounded">
                  <small className="text-muted">
                    <strong>Our hours:</strong> Mon-Fri 9 AM - 6 PM, Sat 10 AM -
                    4 PM. Sunday closed.
                    <br />
                    Pick-up is at least {turnaroundDays} days after drop-off for
                    this service.
                  </small>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Additional Notes</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Rolex Submariner not winding, needs crystal replacement."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>

              {(dropoffDate || pickupDate) && (
                <div className="mb-4 p-3 border rounded schedule-summary">
                  <h6>Schedule Summary:</h6>
                  {dropoffDate && (
                    <div>
                      <strong>Drop-off:</strong> {dropoffDate}{" "}
                      {dropoffTime && `at ${dropoffTime}`}
                    </div>
                  )}
                  {pickupDate && (
                    <div>
                      <strong>Pick-up:</strong> {pickupDate}{" "}
                      {pickupTime && `at ${pickupTime}`}
                    </div>
                  )}
                </div>
              )}

              <div className="row justify-content-center">
                <div className="col-12 col-lg-4">
                  <button
                    className={`btn w-100 backButton submit-btn ${
                      isSubmitting ? "submitting" : ""
                    }`}
                    onClick={buttonClick}
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>

              <div className="text-center mt-3">
                <small className="text-muted">
                  You should receive an email confirmation shortly after
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default ServiceDetail;
