function CertificationCard({ certification, onViewDetails }) {
  return (
    <div className="card watchCard h-100 d-flex flex-column w-100">
      <div className="px-3 pt-3 d-flex align-items-center justify-content-center">
        <img
          src={certification.image}
          alt={certification.title}
          className="card-img "
          style={{ maxHeight: "160px", maxWidth: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="card-body d-flex flex-column flex-grow-1 text-center">
        <h5 className="card-title text-center mb-3">{certification.title}</h5>
        <p className="card-text flex-grow-1 text-center">
          {certification.provider}
        </p>
        <span
          className="card-text text-center accentText"
          onClick={onViewDetails}
          style={{ cursor: "pointer" }}
        >
          View Details
        </span>
      </div>
    </div>
  );
}

export default CertificationCard;
