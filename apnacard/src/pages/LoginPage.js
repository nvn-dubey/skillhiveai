import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="container my-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3">Sign In</button>
        <div className="text-center">
            {/* Link to Forgot Password page/section */}
            <Link to="/forgot-password" className="d-block mb-2">Forgot Password?</Link>
            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;