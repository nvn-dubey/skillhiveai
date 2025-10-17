import React from 'react';
import { Link } from 'react-router-dom';

function Teamprofile({ teamProfile }) {
  return (
    <div className="row justify-content-center">
      {teamProfile.map((member) => (
        <div key={member.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card text-center shadow-sm h-100">
            
            {/* 1. Image Display */}
            <div className="p-3">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="rounded-circle mb-3" 
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
              ) : (
                // Fallback for members without an image path
                <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center mb-3 mx-auto" 
                     style={{ width: '120px', height: '120px', fontSize: '2rem' }}>
                    {member.name.charAt(0)}
                </div>
              )}
            </div>

            {/* 2. Header and Role */}
            <div className="card-header bg-primary text-white pt-0 pb-2 border-0">
              <h5 className="card-title mb-0">{member.name}</h5>
              <p className="card-text mb-0">{member.role}</p>
            </div>
            
            <div className="card-body">
              {/* Expertise Badge */}
              <span className="badge bg-success mb-3">
                Expertise: {member.role}
              </span>
              
              <p className="card-text text-muted">{member.about.substring(0, 70)}...</p>
              
              <div className="d-flex justify-content-center mt-3 pt-2 border-top">
                {/* View Profile Link */}
                <Link to={`/profile/${member.id}`} className="btn btn-sm btn-outline-primary me-2">
                  View Full Profile
                </Link>
                
                {/* LinkedIn Link (The 'View Open Jobs' button is REMOVED) */}
                {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-info">
                        LinkedIn
                    </a>
                )}
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Teamprofile;