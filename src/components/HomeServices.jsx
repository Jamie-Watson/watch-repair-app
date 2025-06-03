import ServiceCard from "./ServiceCard";

function HomeServices() {
  return (
    <>
      <div className="container-fluid homeCertifications d-flex py-3 homeServices">
        <div className="container">
          <div className="row g-4 text-center">
            <h1 className="display-4 fw-bold mb-3 whiteText">
              Specialist Services
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-sm-4 px-5">
              <ServiceCard
                serviceTitle="Service Name"
                serviceDes="Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat."
                serviceImg="https://picsum.photos/300/300"
              />
            </div>
            <div className="col-sm-4 px-5">
              <ServiceCard
                serviceTitle="Service Name"
                serviceDes="Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat."
                serviceImg="https://picsum.photos/300/300"
              />
            </div>
            <div className="col-sm-4 px-5">
              <ServiceCard
                serviceTitle="Service Name"
                serviceDes="Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat."
                serviceImg="https://picsum.photos/300/300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeServices;
