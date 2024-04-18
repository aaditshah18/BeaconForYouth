import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../styles/scss/slider.scss";

const Slider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="/images/complaint.jpg"
            alt="Complaint"
          />
          <div className="carousel-caption">
            <h5>Raise your voice</h5>
            <p>
              File a complaint if you have experienced or witnessed any form of
              violence. Your feedback helps us improve our services and support
              for those in need.
            </p>
            <a href="#" className="btn btn-primary">
              File a Complaint
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="/images/activity.jpg"
            alt="Activity"
          />
          <div className="carousel-caption">
            <h5>Activities We Organized</h5>
            <p>
              Explore the various activities and events we have organized to
              raise awareness and support for victims of violence. Join us in
              making a difference.
            </p>
            <a href="#" className="btn btn-primary">
              Explore
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="/images/donate.jpg"
            alt="Donate"
          />
          <div className="carousel-caption">
            <h5>Support Our Cause</h5>
            <p>
              Your donation helps us continue our mission to support victims of
              violence and create a safer community for everyone. Every
              contribution makes a difference.
            </p>
            <a href="#" className="btn btn-primary">
              Donate
            </a>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default Slider;
