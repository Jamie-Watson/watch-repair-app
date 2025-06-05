function CertificationCard({
  certificationDes,
  certificationTitle,
  certificationImg,
}) {
  return (
    <div className="card watchCard h-100 d-flex flex-column w-100">
      <div className="px-5 pt-5">
        <img src={certificationImg} alt="" className="card-img cardImage" />
      </div>
      <div className="card-body d-flex flex-column flex-grow-1">
        <h5 className="card-title text-center mb-3">{certificationTitle}</h5>
        <p className="card-text flex-grow-1 text-center">{certificationDes}</p>
        <div className="card-text flex-grow-1 text-center accentText">
          View Details
        </div>
      </div>
    </div>
  );
}

export default CertificationCard;
