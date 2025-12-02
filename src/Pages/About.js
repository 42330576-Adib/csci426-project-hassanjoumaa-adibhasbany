import React from 'react';
import ali from '../assets/ali.jpg';
import ali2 from '../assets/ali2.png';

function About() {
  return (
    <div className="page">
      <h1>About Coffee Dose</h1>

      <p>
        Coffee Dose is all about giving you that perfect shot of energy.
        From signature frappes to creamy milk shakes and iced coffee,
        every drink is designed to be simple, bold and memorable.
      </p>

      <p>
        Located in nabtiyeh el tahta, hay el jemaat we open everyday from 8am till midnight. Our goal is to make
        every visit feel like your favourite coffee break of the day.
      </p>

      {/* ---------- STAFF SECTION ---------- */}
      <h1 style={{ marginTop: '3rem' }}>Our Staff</h1>

      <div className="staff-section">
        {/* COLUMN 1 */}
        <div className="staff-card">
          <img src={ali} alt="Ali" className="staff-photo" />
          <h2>Ali (the main surgeon)</h2>
          <p>
            Ali is our lead physitian administrating Coffee Dose, known for his precision and signature
            brews. He comes from a long line of baristas, his father and brother are baristas too, so you know you're in good hands.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div className="staff-card">
          <img src={ali2} alt="Ali 2" className="staff-photo" />
          <h2>Ali (our resident)</h2>
          <p>
            With a calm vibe and creative touch, Ali brings a modern twist to
            Coffee Dose. From latte art to flavored blends, he crafts drinks with
            style and personality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
