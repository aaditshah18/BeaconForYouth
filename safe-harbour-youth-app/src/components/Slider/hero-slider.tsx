import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../styles/scss/slider.scss';

const Slider: React.FC = () => {
  const { t } = useTranslation();

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
            alt={t('Complaint')}
          />
          <div className="carousel-caption">
            <h5>{t('Raise your voice')}</h5>
            <p>
              {t('File a complaint if you have experienced or witnessed any form of violence. Your feedback helps us improve our services and support for those in need.')}
            </p>
            <a href="../../complaintform" className="btn btn-primary">
              {t('File a Complaint')}
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="/images/activity.jpg"
            alt={t('Activity')}
          />
          <div className="carousel-caption">
            <h5>{t('Activities We Organized')}</h5>
            <p>
              {t('Explore the various activities and events we have organized to raise awareness and support for victims of violence. Join us in making a difference.')}
            </p>
            <a href="../resource/campaingdetail" className="btn btn-primary">
              {t('Explore')}
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="/images/donate.jpg"
            alt={t('Donate')}
          />
          <div className="carousel-caption">
            <h5>{t('Support Our Cause')}</h5>
            <p>
              {t('Your donation helps us continue our mission to support victims of violence and create a safer community for everyone. Every contribution makes a difference.')}
            </p>
            <a
              href="https://buy.stripe.com/test_5kA7wl8E20n33dK4gg"
              className="btn btn-primary"
            >
              {t('Donate')}
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
        <span className="visually-hidden">{t('Previous')}</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">{t('Next')}</span>
      </a>
    </div>
  );
};

export default Slider;
