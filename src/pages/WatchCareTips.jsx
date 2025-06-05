import watchCare from "../data/watchCare";
import Contact from "../components/Contact";

function WatchCareTips() {
  const createId = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]/g, "");
  };

  const createSentence = (l) => {
    var sentence = "";
    for (let item of l) {
      sentence += item + ", ";
    }
    return sentence.slice(0, -2);
  };

  return (
    <>
      <div className="container-fluid py-3 homeServices">
        <div className="row g-4 text-center">
          <h1 className="display-4 fw-bold mb-3 whiteText">Watch Care Tips</h1>
        </div>
      </div>
      <div className="container-fluid serviceDescription">
        <div className="row g-4 justify-content-center align-items-center">
          <div className="col-8">
            <div className="accordion" id="accordionExample">
              {watchCare.map((tip, index) => {
                const accordionId = createId(tip.title);
                return (
                  <div key={index} className="accordion-item careTips my-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button careTipsButton collapsed fs-3 p-5"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${accordionId}`}
                        aria-expanded="false"
                        aria-controls={accordionId}
                      >
                        {tip.title}
                      </button>
                    </h2>
                    <div
                      id={accordionId}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body careTips fs-5">
                        <p>{tip.explanation}</p>
                        <h6 className="fs-4">Benefits:</h6>
                        <p>{createSentence(tip.topics)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default WatchCareTips;
