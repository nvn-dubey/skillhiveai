import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProfilePage({ teamData }) {
    const { memberId } = useParams();
    
    // Convert memberId from string (from URL) to number for comparison
    const idToFind = parseInt(memberId); 
    
    // Find the member object from the teamData array
    const member = teamData.find(m => m.id === idToFind);

    if (!member) {
        return (
            <div className="container my-5 text-center">
                <h1 className="text-danger">404 - Profile Not Found</h1>
                <p className="lead">The requested team member profile does not exist.</p>
                <Link to="/" className="btn btn-primary mt-3">Go to Home</Link>
            </div>
        );
    }

    return (
        <div className="container my-5" style={{ maxWidth: '800px' }}>
            <div className="card shadow-lg p-4 p-md-5">
                <div className="row align-items-center">
                    
                    {/* Left Column: Image and Contact */}
                    <div className="col-md-4 text-center border-end">
                        
                        {/* Image Display */}
                        {member.image ? (
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="rounded-circle mb-4 border border-5 border-light-subtle" 
                                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                            />
                        ) : (
                            // Fallback if image path is missing or invalid
                            <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center mb-4 mx-auto" 
                                style={{ width: '150px', height: '150px', fontSize: '3rem' }}>
                                {member.name.charAt(0)}
                            </div>
                        )}
                        
                        <h4 className="text-primary mt-2">{member.name}</h4>
                        <p className="lead text-muted">{member.role}</p>

                        <hr />

                        {/* Contact/Social Links */}
                        <p className="mb-2">
                            <i className="bi bi-person-badge me-2"></i> Member ID: {member.id}
                        </p>
                        
                        {/* Display Email if it exists */}
                        {member.emailid && (
                            <p className="mb-2">
                                <i className="bi bi-envelope-fill me-2"></i> {member.emailid}
                            </p>
                        )}
                        
                        {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-info mt-2">
                                <i className="bi bi-linkedin me-2"></i> Connect on LinkedIn
                            </a>
                        )}
                    </div>

                    {/* Right Column: About Section */}
                    <div className="col-md-8">
                        <h2 className="mb-4 border-bottom pb-2">About {member.name}</h2>
                        
                        <p className="text-muted fs-5">
                            {member.about}
                        </p>

                        <h3 className="mt-5">Our Expertise:</h3>
                        <p>
                            As the **{member.role}** at SkillHive, {member.name} contributes directly to our core services, specializing in **{member.role}** solutions to meet client needs.
                        </p>
                        
                        <div className="mt-4 text-end">
                             <Link to="/about" className="btn btn-outline-secondary">
                                <i className="bi bi-arrow-left me-2"></i> Back to Team
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;