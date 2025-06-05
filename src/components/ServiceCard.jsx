function ServiceCard({ serviceDes, serviceTitle, serviceImg }) {
  return (
    <>
      <div className="card serviceCard h-100 d-flex flex-column">
        <div className="px-5 pt-5">
          <img src={serviceImg} alt="" className="card-img" />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center mb-3">{serviceTitle}</h5>
          <p className="card-text flex-grow-1 d-flex align-items-center">{serviceDes}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
