import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Utility function to convert 'web-development' into 'Web Development'
const formatTitle = (slug) => {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

function ServiceDetailPage() {
    const { serviceName } = useParams();

    // --- UPDATED: Expanded data structure with 'icon' property ---
    const serviceDetails = {
        'web-development': {
            description: "From simple websites to complex web applications, we build fast, scalable, and secure solutions using modern stacks like React, Node, and Go.",
            features: [
                "Custom full-stack development",
                "Scalable and secure architecture",
                "API design and integration",
                "Performance optimization"
            ],
            // Add a Bootstrap Icon class here, e.g., "bi bi-code-slash"
            icon: "bi bi-code-slash", // Represents code/development
            image: "/images/services/web-dev.jpg" // Kept for reference, but won't be used visually now
        },
        'ui-ux': {
            description: "Creating intuitive and beautiful user interfaces (UI) and user experiences (UX) that maximize user satisfaction and conversion rates.",
            features: [
                "Wireframing & Prototyping (Figma/Sketch)",
                "User Journey Mapping",
                "Usability Testing",
                "Brand Style Guides & Component Libraries"
            ],
            icon: "bi bi-gem", // Represents design/creativity
            image: "/images/services/ui-ux.jpg"
        },
        'app-development': {
            description: "Native and hybrid mobile application development for both iOS (Swift/React Native) and Android (Kotlin/Flutter) platforms.",
            features: [
                "Cross-platform development (React Native/Flutter)",
                "Native performance optimization",
                "App Store/Play Store deployment",
                "Backend integration"
            ],
            icon: "bi bi-phone", // Represents mobile apps
            image: "/images/services/app-dev.jpg"
        },
        'seo': {
            description: "Improving your search engine ranking and driving quality organic traffic to your digital properties through proven SEO strategies.",
            features: [
                "Technical SEO Audits",
                "Keyword Research & Strategy",
                "On-Page and Off-Page Optimization",
                "Content Strategy"
            ],
            icon: "bi bi-search", // Represents search
            image: "/images/services/seo.jpg"
        },
        'aiml': {
            description: "Developing custom AI models and machine learning solutions to automate processes, predict trends, and derive deep business insights.",
            features: [
                "Custom Model Training",
                "Data Science Consulting",
                "Natural Language Processing (NLP)",
                "System Integration"
            ],
            icon: "bi bi-robot", // Represents AI/ML
            image: "/images/services/ai-ml.jpg"
        },
        'chatbot': {
            description: "Implementing intelligent chatbots for 24/7 customer support, lead generation, and internal workflow automation on web and messaging platforms.",
            features: [
                "Custom intent and entity recognition",
                "Seamless integration with CRM/APIs",
                "Multi-language support",
                "Deployment on various channels"
            ],
            icon: "bi bi-chat-dots", // Represents chatbots
            image: "/images/services/chatbot.jpg"
        },
        'all-services': {
            description: "We offer comprehensive full-stack solutions covering every aspect of web and app development, from initial idea conception to final deployment and maintenance.",
            features: [
                "Full project lifecycle management",
                "Dedicated project manager",
                "Combined expertise across all fields",
                "SLA-backed support and maintenance"
            ],
            icon: "bi bi-journal-check", // Represents comprehensive services
            image: "/images/services/all-services.jpg"
        }
    };

    const currentService = serviceDetails[serviceName];
    const title = formatTitle(serviceName);
    
    // Fallback data for an unknown serviceName
    const fallback = {
        description: "Service details coming soon. Please check back later!",
        features: ["Check our other services", "Contact us for custom requests"],
        icon: "bi bi-question-circle", // Default icon for unknown service
        image: "/images/services/default.jpg" // Still kept for completeness, but not used now
    };

    const service = currentService || fallback;

    return (
        <div className="container my-5" style={{ maxWidth: '800px' }}>
            <h1 className="text-center text-primary mb-4">Service: {title}</h1>
            
            <div className="card shadow p-4">
                {/* 1. Icon Display (instead of image) */}
                <div className="text-center mb-4">
                    {service.icon ? (
                        <i className={`${service.icon} text-primary display-1`}></i> // Bootstrap Icon
                    ) : (
                        // Fallback if no icon is defined
                        <span className="display-1 text-secondary">?</span> 
                    )}
                    <p className="text-muted mt-2">{title} Illustration</p> {/* Text placeholder */}
                </div>
                
                {/* 2. Description */}
                <p className="lead border-bottom pb-3 mb-4">
                    {service.description}
                </p>

                {/* 3. Key Features */}
                <h3 className="mb-3">Key Deliverables:</h3>
                <ul className="list-group list-group-flush mb-4">
                    {service.features.map((feature, index) => (
                        <li key={index} className="list-group-item">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* 4. Call to Action */}
                <div className="text-center mt-3">
                    <Link to="/post-task" className="btn btn-lg btn-primary me-3">
                        Start a Project Now
                    </Link>
                    <Link to="/rate-card" className="btn btn-lg btn-outline-secondary">
                        View Pricing
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default ServiceDetailPage;