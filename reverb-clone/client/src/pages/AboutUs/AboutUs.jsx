import React from "react";
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <div className="product-header"></div>
      <div className="product-title">
        <h1>About Us</h1>
        <div className="divider"></div>
      </div>
      <div className="about-content">
        <p>
          Welcome to our The G.A.S. Station "Gear Acquisition Syndrome", a unique destination for buying and selling used guitar equipment. This platform is more than just a marketplace—it's a testament to my passion for full-stack web development and my dedication to creating intuitive and user-centric web experiences.
        </p>
        <p>
          Crafted meticulously as a portfolio project, every element of this platform has been designed and implemented from the ground up using React for the frontend, paired with the powerful MongoDB for database management. Unlike many modern websites, no styling libraries were utilized here. Every visual component you see is a result of pure CSS, sculpted to bring about a seamless and visually appealing experience.
        </p>
        <p>
          While this site offers a payment section to simulate real-world e-commerce functionalities, it's important to note that all transactional features are currently disabled. This decision was taken to emphasize the site's purpose as a portfolio project, ensuring visitors understand its intent as a demonstration of web development capabilities rather than a fully functional e-commerce platform.
        </p>
        <p>
          Thank you for visiting and exploring this project. Your feedback is always appreciated as I continue on my journey to becoming an even more proficient full-stack developer.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
