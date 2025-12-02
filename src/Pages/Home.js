import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/carousel1.jpg';
import img2 from '../assets/carousel2.jpg';
import img3 from '../assets/carousel3.jpg';
import img4 from '../assets/carousel4.jpg';
import img5 from '../assets/carousel5.jpg';
import img6 from '../assets/carousel6.jpg';
import img7 from '../assets/carousel7.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goTo = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const id = setInterval(goNext, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="page home-page">
      <section className="hero">
        <h1 className="hero-title">Your Daily Coffee Dose</h1>
        <p className="hero-subtitle">
          Coffee, shakes, smoothies and refreshers – crafted to boost your day.
        </p>
        <Link to="/menu" className="cta-button">
          View Menu
        </Link>
      </section>

      <section className="carousel-section">
        <h2>Signature Drinks &amp; Moments</h2>

        <div className="carousel-outer">
          <div className="carousel">
            <button
              className="carousel-arrow"
              onClick={goPrev}
              aria-label="Previous drink"
            >
              ‹
            </button>

            <div className="carousel-window">
              <img
                src={images[currentIndex]}
                alt={`Coffee Dose drink ${currentIndex + 1}`}
                className="carousel-image"
              />
            </div>

            <button
              className="carousel-arrow"
              onClick={goNext}
              aria-label="Next drink"
            >
              ›
            </button>
          </div>

          <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={
                  index === currentIndex
                    ? 'carousel-dot carousel-dot-active'
                    : 'carousel-dot'
                }
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
