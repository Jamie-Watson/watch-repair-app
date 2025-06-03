function ServiceCard({ serviceDes, serviceTitle, serviceImg }) {
  return (
    <>
      <div className="card serviceCard">
        <div className="px-5 pt-5">
          <img src={serviceImg} alt="" className="card-img" />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{serviceTitle}</h5>
          <p className="card-text">{serviceDes}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
