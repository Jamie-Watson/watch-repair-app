function SecondaryHomeJumbotron(){
    return(<div 
        className="position-relative d-flex justify-content-center justify-content-md-end whiteText secondaryHomeJumbotron"
       
      >
        <div className="col-12 col-lg-4 p-4 text-center" style={{ zIndex: 2 }}>
          <h1 className="display-5 fw-bold mb-5">
            Ready to Get Your Watch Repaired?
          </h1>
          <p className="lead mb-5 pb-5 fw-bold" >
          Contact us today for a personalized consultation and a free, no-obligation quote
          </p>
          <div className="pt-5">
          <span className="fs-2">
          <i className="bi bi-star mx-2"></i>
          <i className="bi bi-star mx-2"></i>
          <i className="bi bi-star mx-2"></i>
          <i className="bi bi-star mx-2"></i>
          <i className="bi bi-star mx-2"></i>
          </span>
          </div>
          <p className="lead fw-bold" >
          Five Star reviews
          </p>
        </div>
      </div>);
}

export default SecondaryHomeJumbotron;