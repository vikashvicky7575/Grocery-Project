import React from "react";
import {banners} from '../../Data/images';
import styles from './BannerCarousel.module.css';


const BannerCarousel = () => {
  return (
    <div id="bannerCarousel" className={`carousel slide ${styles.bannerWrapper}`} data-bs-ride="carousel">
      <div className="carousel-inner">
        {banners.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={item.src} className={`d-block w-100 ${styles.bannerImg}`} alt={item.tagline} />
            <div className={`carousel-caption d-none d-md-block ${styles.caption}`}>
              <h2 className={styles.tagline}>{item.tagline}</h2>
              <p className={styles.subtext}>{item.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BannerCarousel;