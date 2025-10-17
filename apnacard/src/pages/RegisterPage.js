import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="container my-5" style={{ maxWidth: '400px' }}>
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Create Your SkillHive Account</h2>
        <form>
          {/* NEW: Role Selection */}
          <div className="mb-3">
            <label className="form-label d-block">I am registering as:</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="userRole"
                id="roleClient"
                value="client"
                defaultChecked // Default to client for task posting
              />
              <label className="form-check-label" htmlFor="roleClient">
                A **Client** (Hire Talent)
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="userRole"
                id="roleFreelancer"
                value="freelancer"
              />
              <label className="form-check-label" htmlFor="roleFreelancer">
                A **Freelancer** (Find Jobs)
              </label>
            </div>
          </div>
          {/* End Role Selection */}

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required />
          </div>
          
          <button type="submit" className="btn btn-success w-100 mt-3">
            Register Account
          </button>
        </form>
        <p className="text-center mt-3 mb-0">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;