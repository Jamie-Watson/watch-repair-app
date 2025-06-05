import WatchCard from "../components/WatchCard";
import watchData from "../data/watchData";
import Contact from "../components/Contact";

function OurWatches() {
  return (
    <>
      <div className="container-fluid py-3 homeServices">
        <div className="row g-4 text-center">
          <h1 className="display-4 fw-bold mb-3 whiteText">Our Watches</h1>
        </div>
        <div className="row g-4 text-center justify-content-center mb-3">
          <div className="col-lg-4">
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              <strong>Important!</strong> Instore purchase only - online
              ordering not available.
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {watchData.map((watch, index) =>
            index < 6 ? (
              <div className="col-sm-4">
                <WatchCard
                  watchTitle={watch.title}
                  watchDes={watch.description}
                  watchImg={watch.image}
                  watchPrice={watch.price}
                />
              </div>
            ) : (
              <></>
            )
          )}
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 px-5"></div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default OurWatches;
