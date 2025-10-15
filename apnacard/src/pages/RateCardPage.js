import React from 'react';

function RateCardPage() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary">Service Pricing & Rate Card</h1>
      <p className="lead text-center mb-5">
        Below is an overview of the typical rates for our various services. All prices are estimates and subject to final project scope.
      </p>

      <div className="row justify-content-center">
        {/* Pricing Card 1: Web Development */}
        <div className="col-md-4 mb-4">
          <div className="card text-center shadow h-100">
            <div className="card-header bg-dark text-white">
              <h4 className="my-0 fw-normal">Web Development</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$50 <small className="text-muted fw-light">/ task</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Custom React/Go stack</li>
                <li>Responsive Design</li>
                <li>Full-Stack Development</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Card 2: UI/UX Design */}
        <div className="col-md-4 mb-4">
          <div className="card text-center shadow h-100">
            <div className="card-header bg-dark text-white">
              <h4 className="my-0 fw-normal">UI/UX Design</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$40 <small className="text-muted fw-light">/ task</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Figma/Sketch Prototyping</li>
                <li>User Research & Testing</li>
                <li>Brand Style Guide</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RateCardPage;