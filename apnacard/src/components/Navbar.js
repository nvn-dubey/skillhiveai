import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    // REMOVED: State for the modal form inputs is no longer needed.
    // REMOVED: handleInputChange and handleSubmit are no longer needed.

    render() {
        // NOTE: We'll use the SkillHive branding from your repeated code.
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        SkillHive
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            
                            {/* Link to the dedicated Post a Task page */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/post-task">
                                    Post a Task
                                </Link>
                            </li>

                            {/* UPDATED Services Dropdown Menu with Rate Card link */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Service
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/services/web-development">Web Development</Link></li>
                                    <li><Link className="dropdown-item" to="/services/ui-ux">UI/UX Design</Link></li>
                                    <li><Link className="dropdown-item" to="/services/app-development">App Development</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/services/seo">SEO</Link></li>
                                    <li><Link className="dropdown-item" to="/services/aiml">AI/ML</Link></li>
                                    <li><Link className="dropdown-item" to="/services/chatbot">Chatbot</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    {/* Link to the NEW Rate Card page */}
                                    <li><Link className="dropdown-item bg-light" to="/rate-card">
                                        <i className="bi bi-tag-fill me-2"></i>Pricing & Rate Card
                                    </Link></li>
                                </ul>
                            </li>
                        </ul>

                        {/* Right-aligned Login/Register buttons */}
                        <div className="d-flex align-items-center">
                            <Link to="/login" className="btn btn-outline-light me-2">
                                Login
                            </Link>
                            <Link to="/register" className="btn btn-outline-light me-3">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            /* REMOVED: The Modal HTML is removed from here to prevent the Illegal Invocation error */
        );
    }
}

export default Navbar;