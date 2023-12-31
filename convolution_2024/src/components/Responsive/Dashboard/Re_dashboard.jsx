import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper';
import "./Re_dashboard.css";


const Re_dashboard = () => {
  useEffect(() => {
    const swiper = new Swiper('.mySwiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      },
      loop: true,
    });

    return () => {
      swiper.destroy(); // Cleanup Swiper instance on component unmount
    };
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (
    <div>
      <h1>New Movies</h1>
      {/* Swiper */}
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          {/* Your slides go here */}
          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="card">
              <img src="https://placekitten.com/300/200" alt="Card Image" />
              <div className="card-content">
                <div className="card-title">Card Title</div>
                <p className="card-text">
                  This is a simple card with some content. You can customize it as
                  per your needs.
                </p>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other slides */}
          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="card">
              <img src="https://placekitten.com/300/200" alt="Card Image" />
              <div className="card-content">
                <div className="card-title">Card Title</div>
                <p className="card-text">
                  This is a simple card with some content. You can customize it as
                  per your needs.
                </p>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="swiper-slide">
            <div className="card">
              <img src="https://placekitten.com/300/200" alt="Card Image" />
              <div className="card-content">
                <div className="card-title">Card Title</div>
                <p className="card-text">
                  This is a simple card with some content. You can customize it as
                  per your needs.
                </p>
              </div>
            </div>
          </div>
          {/* Repeat this structure for other slides */}
        </div>
      </div>
    </div>
  );
};

export default Re_dashboard;
