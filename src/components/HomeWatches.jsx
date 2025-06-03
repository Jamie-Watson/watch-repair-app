import WatchCard from "./WatchCard";

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
            <div className="col-sm-4 px-5">
              <WatchCard
                watchTitle="Watch Name"
                watchPrice="$999.99"
                watchDes="Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat."
                watchImg="https://picsum.photos/300/300"
              />
            </div>
            <div className="col-sm-4 px-5">
              <WatchCard
                watchTitle="Watch Name"
                watchPrice="$999.99"
                watchDes="Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat."
                watchImg="https://picsum.photos/300/300"
              />
            </div>
            <div className="col-sm-4 px-5">
              <WatchCard
                watchTitle="Watch Name"
                watchPrice="$999.99"
                watchDes="Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat."
                watchImg="https://picsum.photos/300/300"
              />
            </div>
          </div>
          <div className="row g-4 text-center justify-content-center mt-3">
            <div className="col-sm-4 text-center">
              <p className="lead whiteText fw-bold" href="">
                View All Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeWatches;
