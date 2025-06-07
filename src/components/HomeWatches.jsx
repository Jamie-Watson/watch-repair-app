import WatchCard from "./WatchCard";
import watchData from "../data/watchData";
function HomeWatches() {
  return (
    <>
      <div className="container-fluid d-flex py-3 homeWatches">
        <div className="container">
          <div className="row g-4 text-center mb-3">
            <h1 className="display-4 fw-bold mb-3 blackText py-2">
              Our Watches
            </h1>
          </div>
          <div className="row g-4 text-center justify-content-center mb-3">
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
          <div className="row g-4 justify-content-center">
            {watchData.map((watch, index) =>
              index < 3 ? (
                <div className="col-lg-4 px-5">
                  <WatchCard
                    watchTitle={watch.title}
                    watchPrice={watch.price}
                    watchDes={watch.description}
                    watchImg={watch.image}
                  />
                </div>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeWatches;
