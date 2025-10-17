import React from 'react';
import Teamprofile from '../components/Teamprofile';

function HomePage({ teamProfile }) {
  return (
    
    <div className="container my-5">
      <h2 className="text-center mb-4">Meet Our Team</h2>
      <Teamprofile teamProfile={teamProfile} />
    </div>
  );
}

export default HomePage;