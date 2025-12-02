import React from 'react';
import instaIcon from '../assets/instagram-icon_square_24x24.png';
import tiktokIcon from '../assets/tiktok_logo_24.png';        
import whatsappIcon from '../assets/whatsapp_square_24.png';  

function Contact() {
  return (
    <div className="page contact-page">
      <h1>Contact</h1>

      <p>
        Have a question, want to order, or just want to say hi?
        Reach Coffee Dose on any of the following platforms:
      </p>

      <div className="contact-buttons">

        <a
          className="social-btn"
          href="https://wa.me/96170747035"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" />
          WhatsApp
        </a>

        <a
          className="social-btn"
          href="https://www.instagram.com/coffeedose.lb"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instaIcon} alt="Instagram" />
          Instagram
        </a>

        <a
          className="social-btn"
          href="https://www.tiktok.com/@coffeedose.lb"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tiktokIcon} alt="TikTok" />
          TikTok
        </a>

      </div>
    </div>
  );
}

export default Contact;
