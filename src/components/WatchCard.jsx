function WatchCard({ watchDes, watchTitle, watchImg, watchPrice }) {
  return (
    <>
      <div className="card h-100 d-flex flex-column w-100">
        <div className="px-3 pt-3">
          <img src={watchImg} alt="" className="card-img cardImage" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{watchTitle}</h5>
          <h5 className="card-text">{watchPrice}</h5>
          <p className="card-text">{watchDes}</p>
        </div>
      </div>
    </>
  );
}

export default WatchCard;
