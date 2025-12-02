import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="page">
      <h1>Services</h1>
      <p>
        Besides serving great coffee, Coffee Dose also offers consultancy
        for people who want to open their own coffee shop. We support you
        with concept creation, menu design, cost calculation, workflow for
        baristas, and branding so you can launch with confidence.
      </p>

      <Link to="/contact" className="cta-button contact-btn">
        Contact Us
      </Link>
    </div>
  );
}

export default Services;
