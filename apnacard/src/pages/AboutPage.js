import React from 'react';

function AboutPage() {
  return (
    <div className="container my-5">
      <h1 className="text-center">About SkillHive</h1>
      <p className="lead text-center">
        We are SkillHive, a dedicated team of professionals passionate about delivering cutting-edge digital solutions.
      </p>
      <div className="row mt-5">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>To empower businesses to thrive in the digital age by providing expert web, app, and AI/ML development services.</p>
        </div>
        <div className="col-md-6">
          <h3>Why Choose Us?</h3>
          <p>We combine creativity with technical expertise to build scalable, reliable, and user-friendly applications that drive results.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;